<template>
  <!-- 顶部栏 -->
  <TopBar />

  <!-- 各路由 -->
  <div id="mainContainer">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta?.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta?.keepAlive" />
    </router-view>
  </div>

  <Footer />
</template>

<script>
import TopBar from '@cps/TopBar/index.vue';
import Footer from '@cps/Footer/index.vue';

export default {
  components: {
    TopBar,
    Footer,
  },
  setup() {},
};
</script>

<style lang="scss">
#mainContainer {
  min-height: 100vh;
  /* padding-top: $mobTopBarHeight; */
  z-index: 2;
  position: relative;
}
</style>
