<template>
    <!--侧边栏上部导航页面 - 点击可返回主页-->
    <div class="logo" @click="$router.push({ name: 'home' })">
        <h1 style="text-align: center;font-size: large">
            <!--href="javascript:;" 点击标签时不执行任何操作-->
            <a class="brand-large" href="javascript:;">OP权限管理系统</a>
        </h1>
    </div>
    <div>
      <a-menu id="main_sidebar"
            :style="{ width: '200px' }"
            mode="inline"
            theme="dark"
            v-model:openKeys="openKeys"
            v-model:selectkeys="selectKeys">
          <a-sub-menu key="sub1">
              <template #title>
              <span><user-outlined /><span>系统管理</span></span>
             </template>
              <a-menu-item :key="1"><user-outlined /><span class="nav-text">菜单管理</span></a-menu-item>
              <a-menu-item :key="2"><video-camera-outlined /><span class="nav-text">用户管理</span></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
              <template #title>
                  <span><video-camera-outlined /><span>日志管理</span></span>
              </template>
              <a-menu-item :key="1"><user-outlined /><span class="nav-text">错误日志</span></a-menu-item>
              <a-menu-item :key="2"><video-camera-outlined /><span class="nav-text">操作日志</span></a-menu-item>
          </a-sub-menu>

        <sub-menu v-for="menu in $store.state.sidebarMenuList" :key="menu.id"></sub-menu>
      </a-menu>
    </div>
</template>

<script>
import SubMenu from "./main-sidebar-sub-menu";
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons-vue';
export default {
  data() {
    return {
      selectKeys: [1],
      openKeys: ['sub1']
    }
  },
  components: {
    SubMenu,
    UserOutlined,
    VideoCameraOutlined
  },
  // 钩子函数, 还未渲染成html页面时进行初始化操作
  created() {
      this.$store.state.sidebarMenuList = window.APP_CONF.menuList
  },
  methods: {
  }
}
</script>

