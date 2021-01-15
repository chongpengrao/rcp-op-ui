<template>
     <!--导航菜单-->
    <a-menu mode="horizontal" theme="light" style="position: fixed; left: 200px; right: 0; height: 50px; background: #1890ff">
        <!--折叠侧边栏功能-->
        <a-menu-item :key="1">
            <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (this.collapsed = !collapsed)"/>
            <menu-fold-outlined v-else class="trigger" @click="() => (this.collapsed = !collapsed)" />
        </a-menu-item>
        <a-menu-item :key="2">
            <!--刷新功能-->
            <redo-outlined ></redo-outlined>
        </a-menu-item>
        <a-menu-item :key="3">
            <!--缩放功能-->
            <FullscreenExitOutlined v-if="isFullScreen" @click="outFullScreenHandle"/>
            <FullscreenOutlined @click="fullScreenHandle"/>
        </a-menu-item>
        <!--用户修改密码/退出登录等-->
        <a-menu-item :key="4" style="position: fixed; right: 0">
            <!--图标-->
            <div style="display: inline; margin-right: 0">
                <a-avatar size="large">
                    <img src="~@/assets/img/avatar.png">
                </a-avatar>
            </div>
            <div style="display: inline">
                <!--下拉菜单-->
                <a-dropdown size="large">
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="font-size: medium; color: #fff">
                        {{$store.state.User.name}} <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item @click="updatePasswordHandle">
                                <a href="javascript:;">修改密码</a>
                            </a-menu-item>
                            <a-menu-item >
                                <a-popconfirm
                                        title="退出登录?"
                                        ok-text="确定"
                                        cancel-text="取消"
                                        @confirm="logoutHandle">
                                    <a href="javascript:;">退出登录</a>
                                </a-popconfirm>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </a-menu-item>
    </a-menu>
    <!--弹窗, 修改密码-->
    <update-password v-if="updatePasswordVisible" ref="updatePassword"></update-password>
</template>

<script>
import ScreenFull from 'screenfull'
import UpdatePassword from './main-navbar-update-password'
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RedoOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined } from '@ant-design/icons-vue'
export default {
  data() {
    return {
      updatePasswordVisible: false,
      collapsed: false,
      isFullScreen: false
    }
  },
  components:{
    UpdatePassword,
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    RedoOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined,
  },
  methods: {
    // 全屏
    fullScreenHandle () {
      this.isFullScreen = true
      ScreenFull.toggle()
    },
    // 退出全屏
    outFullScreenHandle () {
      this.isFullScreen = false
      ScreenFull.exit()
    },
    // 修改密码
    updatePasswordHandle () {
      this.updatePasswordVisible = true
      this.$nextTick(() => {
        this.$refs.updatePassword.init()
      })
    },
    // 退出登录
    logoutHandle () {
      // TODO
        alert('退出登录')
    }
  }
}
</script>