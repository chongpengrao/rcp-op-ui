<template>
    <div :style="{ padding: '0 15px', background: '#fff', height: '100%' }">
    <a-tabs v-model="activeKey" type="editable-card" hide-add
            @tabClick="tabSelectedHandle"
            @edit="onEdit">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :closable="pane.closable">
            <template v-if="pane.title === 'home'" #tab>
                <home-outlined />
            </template>
            <template v-else #tab>
                <span>{{pane.title}}</span>
            </template>
            {{ pane.content }}
            <div v-if="pane.title === 'home'">
                <router-view  v-slot="{ Component }">
                    <keep-alive><component :is="Component" /></keep-alive>
                </router-view>
            </div>
        </a-tab-pane>
        <template #tabBarExtraContent>
            <a-popconfirm
                    title="确定关闭所有tab?"
                    ok-text="确定"
                    cancel-text="取消"
                    @confirm="tabsCloseAllHandle">
                <a href="#">
                    <a-tooltip>
                        <template #title>
                            关闭全部
                        </template>
                        <CloseOutlined />
                    </a-tooltip>
                </a>
            </a-popconfirm>
        </template>
    </a-tabs>
    </div>
</template>
<script>
import { CloseOutlined,HomeOutlined } from '@ant-design/icons-vue'
export default {
data() {
  const panes = [
    { title: 'home', content: 'Content of Tab 1', key: '1', closable: false },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    { title: 'Tab 3', content: 'Content of Tab 3', key: '3' },
  ];
  return {
    activeKey: panes[0].key,
    newTabIndex: 0,
    panes
  };
},
components: {
  CloseOutlined,
  HomeOutlined
},
computed: {

},
methods: {
  callback(key) {
    console.log(key);
  },
  onEdit(targetKey, action) {
    this[action](targetKey);
  },
  add() {
    const panes = this.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.panes = panes;
    this.activeKey = activeKey;
  },
  remove(targetKey) {
    let activeKey = this.activeKey;
    let lastIndex;
    this.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.panes = panes;
    this.activeKey = activeKey;
  },
  // tabs, 关闭全部
  tabsCloseAllHandle () {
    this.$store.state.contentTabs = this.$store.state.contentTabs.filter(item => item.name === 'home')
    this.$router.push({ name: 'home' })
  },
  // tabs, 选中tab
  tabSelectedHandle (tabKey) {
    let tab = this.$store.state.contentTabs.filter(item => item.name === tabKey)[0]
    if (tab) {
      this.$store.state.contentTabsActiveName = tab.name
      this.$router.push({
        'name': tab.name,
        'params': { ...tab.params },
        'query': { ...tab.query }
      })
    }
  }
},
};
</script>
