<template>
    <a-layout id="components-layout-demo-fixed-sider">
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
            <main-sidebar></main-sidebar>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px', marginBottom: '10px' }">
            <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: 0, height: '50px' }">
                <main-navbar></main-navbar>
            </a-layout-header>
            <a-layout-content :style="{ margin: '64px 16px 0', overflow: 'initial',height: '100vh'}">
                <main-content></main-content>
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center', padding: '10px'}">
                我自风情万种,与世无争  ©2021  Created by Scorpio.Rao
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
import MainNavbar from '@/components/main/main-navbar'
import MainSidebar from "@/components/main/main-sidebar"
import MainContent from '@/components/main/main-content'
import debounce from 'lodash/debounce'
export default {
  data() {
    return {
      loading: true
    }
  },
  components: {
    MainNavbar,
    MainSidebar,
    MainContent
  },
  methods: {
    // 窗口改变大小
    windowResizeHandle () {
      this.$store.state.sidebarFold = document.documentElement['clientWidth'] <= 992 || false
      window.addEventListener('resize', debounce(() => {
        this.$store.state.sidebarFold = document.documentElement['clientWidth'] <= 992 || false
      }, 150))
    },
    // 路由, 监听
    routeHandle (route) {
      if (!route.meta.isTab) {
        return false
      }
      let tab = this.$store.state.contentTabs.filter(item => item.name === route.name)[0]
      if (!tab) {
        tab = {
          ...window.APP_CONF.contentTabDefault,
          ...route.meta,
          'name': route.name,
          'params': { ...route.params },
          'query': { ...route.query }
        }
        this.$store.state.contentTabs = this.$store.state.contentTabs.concat(tab)
      }
      this.$store.state.sidebarMenuActiveName = tab.menuId
      this.$store.state.contentTabsActiveName = tab.name
    },
    // 获取当前管理员信息
    getUserInfo () {
      // todo
        this.$store.state.User.name = 'admin'
    },
  },
  watch: {
    $route: 'routeHandle'
  },
  created () {
    this.windowResizeHandle()
    this.routeHandle(this.$route)
    Promise.all([
      this.getUserInfo()
    ]).then(() => {
      this.loading = false
    })
  }
}
</script>