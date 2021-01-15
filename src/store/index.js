import { createStore } from 'vuex'
import User from './modules/user'

const store = createStore({
  state() {
    return {
      // 侧边栏, 菜单
      sidebarMenuList: [],
      // 侧边栏,折叠状态
      sidebarFold: false,
      // 侧边栏选中的菜单
      sidebarMenuActiveName: '',
      // 内容, 标签页(默认添加首页)
      contentTabs: [{
        ...window.APP_CONF.contentTabDefault,
        'name': 'home',
        'title': 'home'
      }],
      contentTabsActiveName: 'home'
    }
  },
  mutations: {

  },
  modules: {
    User
  }
})

export default store

