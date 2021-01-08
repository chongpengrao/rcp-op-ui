<template>
    <div>
        <a-menu id="main_sidebar"
                :style="{ width: '256px' }"
                mode="inline"
                v-model:openKeys="openKeys"
                v-model:selectkeys="selectKeys"
                @click="handlerClick">
            <a-sub-menu v-for="menu in this.$store.state().sidebarMenuList" :key="menu.id">

            </a-sub-menu>

        </a-menu>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        selectKeys: [1],
        openKeys: ['sub1']
      }
    },
    // 钩子函数, 还未渲染成html页面时进行初始化操作
    created() {
      this.$store.state().sidebarMenuList = []
    },
    methods: {
      handlerClick(e) {
        console.log('click', e);
      }
    }
  }

</script>

