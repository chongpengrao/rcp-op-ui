<template>
    <a-sub-menu v-if="menu.children && menu.children.length > 0" :key="menu.id">
        <template v-slot='title'>
            <svg class="icon-svg aui-sidebar__menu-icon" aria-hidden="true">
                <use :xlink:href="'#${menu.icon}'"></use>
            </svg>
            <span>{{menu.name}}</span>
        </template>
        <sub-menu v-for="item in menu.children" :key="item.id"></sub-menu>
    </a-sub-menu>
    <a-menu-item v-else :key="menu.id" @click="gotoRouteHandler(menu.id)">
        <svg class="icon-svg aui-sidebar__menu-icon" aria-hidden="true">
            <use :xlink:href="'#${menu.icon}'"></use>
        </svg>
        <span>{{menu.name}}</span>
    </a-menu-item>
</template>

<script>
import SubMenu from '@/components/main/main-sideba-sub-menu'
export default {
  name: 'sub-menu',
  // 子组件引入父组件的属性需要使用props
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  components: {
    SubMenu
  },
  methods: {
    // 通过menuId与动态菜单路由进行匹配跳转至指定路由
    gotoRouteHandler (menuId) {
      let route = window.APP_CONF.dynamicMenuRoutes.filter(e => e.meta.menuId === menuId)[0]
      if (route) {
        this.$router.push({ name: route.name })
      }

    }
  }

}

</script>