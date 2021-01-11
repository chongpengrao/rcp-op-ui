<template>
        <a-layout id="components-layout-demo-fixed-sider">
            <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
                <main-sidebar></main-sidebar>
            </a-layout-sider>
            <a-layout :style="{ marginLeft: '200px' }">
                <a-layout-header :style="{ background: '#fff', padding: 0 }">
                    <main-navbar></main-navbar>
                </a-layout-header>
                <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial',height: '75vh'}">
                    <main-content></main-content>
                </a-layout-content>
                <a-layout-footer :style="{ textAlign: 'center', marginBottom: '0px'}">
                    我自风情万种,与世无争  ©2021  Created by Scorpio.Rao
                </a-layout-footer>
            </a-layout>
        </a-layout>
</template>

<script>
import MainNavbar from '@/components/main/main-navbar'
import MainSidebar from "@/components/main/main-sidebar"
import MainContent from '@/components/main/main-content'
export default {
  data() {
    return {

    }
  },
  components: {
    MainNavbar,
    MainSidebar,
    MainContent
  }
}
</script>