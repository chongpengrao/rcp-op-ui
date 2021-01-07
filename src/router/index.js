import { createRouter, createWebHashHistory } from 'vue-router'

//页面路由
const routes = {
  public: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/views/main')
    },
    {
      path: '/login',
      component: ()=> import('@/views/pages/login')
    },
    {
      path: '/403',
      component: ()=> import('@/views/pages/403')
    },
    {
      path: '/404',
      component: ()=> import('@/views/pages/404')
    },
    {
      path: '/500',
      component: ()=> import('@/views/pages/500')
    }
  ]
}

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: routes.public
})

export default router