<template>
  <a-layout-sider>
    <div>
      <a-menu id="main_sidebar"
            :style="{ width: '256px' }"
            mode="inline"
            v-model:openKeys="openKeys"
            v-model:selectkeys="selectKeys">
        <sub-menu v-for="menu in $store.state().sidebarMenuList" :key="menu.id"></sub-menu>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script>
import SubMenu from "./main-sidebar-sub-menu";
export default {
  data() {
    return {
      selectKeys: [1],
      openKeys: ['sub1']
    }
  },
  components: {
    SubMenu
  },
  // 钩子函数, 还未渲染成html页面时进行初始化操作
  created() {
      this.$store.state().sidebarMenuList = window.APP_CONF.menuList
  },
  methods: {
  }
}
</script>

