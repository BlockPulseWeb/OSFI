<script setup lang="ts">
import Menu from './Menu.vue';
import WalletBtn from '@cps/WalletBtn/index.vue';
import { useTopBar } from './useTopBar';

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
  <div class="top-bar-wrap">
    <div :class="['logo-name', { opening: isOpenMenu }]" @click="launchTo({ urlName: 'home' })">
      <img class="light" src="@img/common/logo-name.png" alt="" />
      <img class="dark" src="@img/common/logo-name-color.png" alt="" />
    </div>

    <!-- 控制菜单显示和隐藏 按钮 -->
    <div :class="['toggle-container', { opening: isOpenMenu }]" @click="handleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <!-- 移动端菜单 -->
    <Menu :isShowMenu="isOpenMenu" @hide="handleMenu" />
  </div>
</template>

<style lang="scss" scoped>
.top-bar-wrap {
  width: 100%;
  height: $mobTopBarHeight;
  background-color: transparent;
  @include flexPos(space-between);
  padding: 0 45rem;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

.logo-name {
  position: absolute;
  z-index: 99999;
  width: 214rem;
  height: 71rem;
  background-size: cover;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: all 0.9s;
  }

  > .light {
    opacity: 1;
  }

  &.opening {
    > .light {
      opacity: 0;
    }
    > .dark {
      opacity: 1;
    }
  }
}

.toggle-container {
  $boxHeight: 15px;
  $barHeight: 3px;

  cursor: pointer;
  height: 15px;
  @include flexPos(space-between);
  flex-direction: column;
  z-index: 9999999;
  position: absolute;
  right: 98rem;

  .bar {
    transition: 0.4s;
    width: 20px;
    height: $barHeight;
    background-color: #fff;
    transform-origin: center;
  }

  &.opening {
    $y: calc($boxHeight / 2 - $barHeight / 2);
    $dy: calc((-#{$boxHeight} / 2 + #{$barHeight} / 2));

    .bar:nth-child(1) {
      transform: translateY($y) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      transform: translateY($dy) rotate(-45deg);
    }
    .bar {
      background-color: #000;
    }
  }
}
</style>
