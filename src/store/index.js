import { createStore } from 'vuex'
import User from './modules/user'

const store = createStore({
  state() {
    return {
      // 侧边栏, 菜单
      sidebarMenuList: [],
      // 侧边栏,折叠状态
      sidebarFold: false
    }
  },
  mutations: {

  },
  modules: {
    User
  }
})

export default store

