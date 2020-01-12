<template>
  <q-layout view="lHh Lpr lFf" class="my-layout">
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" aria-label="Menu" class="mobile-only" />
        <q-toolbar-title>
          <div class="pn mobile-only">{{title}}</div>
          <q-tabs indicator-color="transparent" active-color="main" class="text-main layout-title desktop-only">
            <q-route-tab :to='{name:"bigdata"}' label='大数据网络筛查 '></q-route-tab>
            <q-route-tab :to='{name:"tourist"}' label='景区游客画像'></q-route-tab>
            <q-route-tab :to='{name:"touristManager"}' label='景区游客管理'></q-route-tab>
            <q-route-tab to='' label='游后评价分析'></q-route-tab>
            <q-route-tab :to='{name:"index"}'>
              <div class="platform-name">文旅实时运行大数据分析 </div>
            </q-route-tab>
            <q-route-tab to='' label='专家互动诊断'></q-route-tab>
            <q-route-tab to='' label='景区可视化报告'></q-route-tab>
            <q-route-tab to='' label='营销渠道反馈'></q-route-tab>
            <q-route-tab to='' label='景区监控'></q-route-tab>
          </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>菜单</q-item-label>
        <q-item v-for="(item,index) in menu" :key="index" :to='item.router'>
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.name}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      title: '微智云景文旅实时运行大数据分析',
      leftDrawerOpen: false,
      tab: 'realtime_analysis',
      menu: [
        { name: '大数据网络筛查', icon: 'home', router: { name: 'index' } },
        { name: '景区游客画像', icon: 'home', router: { name: 'index' } },
        { name: '景区游客管理', icon: 'home', router: { name: 'index' } },
        { name: '游后评价分析', icon: 'home', router: { name: 'index' } },
        { name: '微智云景文旅实时运行大数据分析', icon: 'home', router: { name: 'index' } },
        { name: '专家互动诊断', icon: 'home', router: { name: 'index' } },
        { name: '景区可视化报告', icon: 'home', router: { name: 'index' } },
        { name: '营销渠道反馈', icon: 'home', router: { name: 'index' } },
        { name: '景区监控', icon: 'home', router: { name: 'index' } },
      ]
    }
  }
}

</script>
<style lang="scss">
.my-layout {
  background: #060b33;
}

.layout-title {
  .q-tab--inactive {
    opacity: 1;
  }
  .q-tab__label {
    font-size: 1.375rem;
    font-family: shsn;
  }
}
.platform-name {
  padding: 1rem 2.4rem;
  background: url(../statics/icons/platform_name.png) no-repeat 0 0 / 100% 100%;
}
</style>
