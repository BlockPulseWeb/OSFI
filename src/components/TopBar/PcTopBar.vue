<script setup lang="ts">
import Menu from './Menu.vue';
import WalletBtn from '@cps/WalletBtn/index.vue';
import { useTopBar, menuList } from './useTopBar';
import { useRoute } from 'vue-router';

const route = useRoute();

const { launchTo } = useTopBar();

// 菜单是否为开启状态
const isOpenMenu = ref(false);
function handleMenu() {
  isOpenMenu.value = !isOpenMenu.value;
  // 控制外部滚动条是否能滚动
  document.body.style.overflow = isOpenMenu.value ? 'hidden' : 'auto';
}
</script>

<template>
  <div :class="['top-bar-wrap', route.meta?.topbar]">
    <img
      @click="launchTo({ urlName: 'home' })"
      v-if="route.meta?.topbar === 'light'"
      src="@img/common/logo-name.png"
      alt=""
      class="w-147rem cursor-pointer"
    />
    <img
      @click="launchTo({ urlName: 'home' })"
      v-else
      src="@img/common/logo-name-color.png"
      alt=""
      class="w-147rem cursor-pointer"
    />

    <div class="menu-list">
      <a
        @click="launchTo({ urlName: m.urlName })"
        class="menu-item"
        v-for="m in menuList"
        :key="m.id"
      >
        {{ m.name }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar-wrap {
  @include -width-a(1200);
  margin: 0 auto;
  height: $mobTopBarHeight;
  background-color: transparent;
  @include flexPos(space-between);
  padding: 15rem 0;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.menu-list {
  @include flexPos(center);

  .menu-item {
    color: #fff;
    font-size: 16rem;
    &:not(:first-of-type) {
      margin-left: 114rem;
    }
  }
}

.top-bar-wrap.dark .menu-item {
  color: #000;
}
</style>
