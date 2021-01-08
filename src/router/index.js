import { createRouter, createWebHashHistory } from 'vue-router'
import { isURL } from "../utils/validate";

// 页面路由
export const pageRoutes = [
  {
    path: '/login',
    component: () => import('@/views/pages/login')
  },
  {
    path: '/404',
    component: () => import('@/views/pages/404'),
    meta: { title: '404未找到' }
  }
]


//模块路由(SPA:单页面应用)
export const moduleRoutes = {
  path: '/',
  component: () => import('@/views/main'),
  name: 'main',
  redirect: { name: 'home' },
  meta: { title: '主入口布局' },
  children: [
    {
      path: '/home',
      component: () => import('@/views/modules/home'),
      name: 'home',
      meta: {
        title: '首页',
        isTab: true
      }
    }
  ]
}

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: pageRoutes.concat(moduleRoutes)
})

router.beforeEach((to, from, next) => {
  // 当前路由若已添加或为页面路由,可直接访问
  if (window.APP_CONF.dynamicMenuRoutesHasAdded || fnCurrentRouteIsPageRoute(to, pageRoutes)) {
    return next()
  }
  // todo 添加动态(菜单)路由: 获取菜单列表, 并添加全局变量保存
  fnAddDynamicMenuRouters(window.APP_CONF.menuList)
  next({...to, replace: true})
})

/**
 * 判断当前路由是否为页面路由
 * @param route 当前路由
 * @param pageRoutes 页面路由,默认为空数组
 */
function fnCurrentRouteIsPageRoute(route, pageRoutes = []) {
  var temp = []
  for (var i = 0; i < pageRoutes.length; i++) {
    if (route.path === pageRoutes[i].path) {
      return true
    }
    if (pageRoutes[i].children && pageRoutes[i].children.length > 0) {
      temp.concat(pageRoutes[i].children)
    }
  }
  // 递归页面路由的子路由
  return temp.length > 0 && fnCurrentRouteIsPageRoute(route, temp)
}

/**
 * 添加动态(菜单)路由
 * @param menuList 菜单列表
 */
function fnAddDynamicMenuRouters (menuList = []) {
  const temp = []
  for (let i = 0; i < menuList.length; i++) {
    // 父级菜单只是导航到子菜单,只有子菜单需要被添加到路由中
    if (menuList[i].children && menuList[i].children.length > 0) {
      temp.concat(menuList[i].children)
      continue
    }
    // 组装路由
    let route = {
      path: '',
      component: null,
      name: '',
      meta: {
        ...window.APP_CONF.contentTabDefault,
        menuId: menuList[i].id,
        title: menuList[i].name
      }
    }

    let param = {}
    let URL = menuList[i].url ? menuList[i].url : ''
    if (isURL(URL)) {
      route['path'] = route['name'] = `i-${menuList[i].id}`
      route['meta']['iframeURL'] = URL
    }
    // 如果url第一个字符为/,则去掉; 将url中所有的_下划线替换成-
    URL = URL.replace(/^\//, '').replace(/_/g, '-')
    route['path'] = route['name'] = URL.replace(/\//g, '-')
    // 菜单url中有!时,组装参数
    if (URL.indexOf('!') !== -1) {
      let paramStr = URL.substring(URL.indexOf('!') + 1)
      let paramArray = paramStr.split('&')
      if (paramArray && paramArray.length > 0) {
        for (let j = 0; j < paramArray.length; j++) {
          let paramMap = paramArray[j].split('=')
          param[paramMap[0]] = paramMap[1]
        }
      }
      URL = URL.substring(0,URL.indexOf('!'))
    }
    route.component = () => import('@/views/modules/'+URL)

    if (param) {
      route.query = param
    }
    // 添加动态菜单路由到主路由的children下
    router.addRoute('main',route)
  }
  // 递归子菜单
  if (temp.length > 0){
    fnAddDynamicMenuRouters(temp)
  }
  // 更新状态
  window.APP_CONF.dynamicMenuRoutesHasAdded = true
  // 404页面处理
  router.addRoute({
    path: '/^*/',
    redirect: { name: '404' }
  })
}


export default router