<script setup lang="ts">
import { menuList } from './useTopBar';
import { useTopBar } from './useTopBar';
import { useContact } from '@hooks/useContact';

const { contactList, launchTo: launchToLink } = useContact();

const { launchTo } = useTopBar();

const props = defineProps<{
  isShowMenu: boolean; // 是否展示菜单
}>();

const $emits = defineEmits<{
  (hide: 'hide'): void; // 隐藏弹窗
}>();

const handleLaunchTo = (item) => {
  console.log('item ...', item);

  launchTo(item);
  $emits('hide');
};
</script>

<template>
  <div class="menu-wrap">
    <!-- 遮罩层 -->
    <div :class="['menu-mask', { active: props.isShowMenu }]" @click="$emits('hide')"></div>
    <!-- 菜单面板 -->
    <transition
      :duration="1000"
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div class="menu-panel" v-show="props.isShowMenu">
        <div class="menu-grid">
          <!-- 点击了其他页 -->
          <div v-for="l in menuList" :key="l.id">
            <!-- 二级菜单 -->
            <el-collapse v-if="l?.children?.length" v-model="l.children.id">
              <el-collapse-item class="menu-tab" :name="l.id">
                <template #title>
                  <div class="flex items-center w-full h-full">
                    <img :src="l.logo" alt="" class="w-0.34rem mr-0.14rem" />
                    <div>{{ l.name }}</div>
                  </div>
                </template>

                <div
                  @click.stop="handleLaunchTo(it)"
                  class="menu-item"
                  v-for="it in l.children"
                  :key="it.id"
                >
                  <div class="menu-tab flex pl-0.28rem items-center">
                    <img :src="it.logo" alt="" class="w-0.34rem mr-0.14rem" />
                    <div>{{ it.name }}</div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>

            <div class="menu-item" v-else @click.stop="handleLaunchTo(l)">
              <div class="menu-tab flex items-center">
                <!-- <img :src="l.logo" alt="" class="w-0.34rem mr-0.14rem" /> -->
                <div>{{ l.name }}</div>
              </div>
              <!-- <img src="@img/common/icon-arrow.png" alt="arrow" class="arrow" /> -->
            </div>
          </div>

          <div class="mt-90">
            <li
              @click="launchToLink(item.link)"
              v-for="item in contactList"
              :key="item.text"
              class="flex mt-40"
            >
              <div class="w-44 flex-center mr-14">
                <img :src="item.logo" alt="" :style="{ width: item.width + 'rem' }" />
              </div>
              <span class="text-32 text-#000">{{ item.text }}</span>
            </li>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
$headerFontSize: 48rem; // 标题字号
$contentFontSize: 48rem; // 内容字号
/* $menuContentHeight: 63vh; // 二级折叠菜单内容高度 */

.menu-panel {
  position: fixed;
  margin: 0 auto;
  top: 0;
  right: 0;
  left: 0;
  overflow: auto;
  background-color: transparent;
  @include -width(100vw, 750px, 750px);
  max-width: 750px;
  height: 100vh; // 菜单栏的高度
  z-index: 10000;
  color: #59597c;
  padding-top: $mobTopBarHeight;

  .menu-grid {
    width: 100%;
    /* height: $menuContentHeight; */
    /* background-color: red; */
    padding: 36rem 44rem;
    @include flexPos(flex-start, center);
    flex-direction: column;
    overflow: auto;

    .menu-tab,
    [role='tab'] {
      font-size: $contentFontSize;
    }
    > div {
      width: 100%;
      /* border-top: solid 1px #323232; */
      /* padding: 0.32rem 0; */

      &:first-child {
        border-top: none;
      }
    }
  }
  .menu-item {
    width: 100%;
    height: 104rem;
    @include flexPos(space-between, center);
    font-size: $contentFontSize;
    color: #000 !important;
    font-family: Montserrat, Montserrat;
    font-weight: bold;

    &.lang {
      justify-content: flex-end;
      padding-right: 50rem;
    }
  }
}

/* 遮罩层 左上角弹出 --start */
.menu-mask {
  position: fixed;
  z-index: 98;

  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right bottom, #1e45d496, #e942b480);
    /* border-bottom-right-radius: 200%; // 右下角圆角 */
    border-bottom-left-radius: 200%; // 左下角圆角
    z-index: -1;
    -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
      border-radius linear 0.8s;
    transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
      -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    // 左上角弹出
    /* transform: translateX(-100%) translateY(-100%); */
    transform: translateX(100%) translateY(-100%);
  }

  &::before {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  &::after {
    background: #fff;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  &.active {
    &::before,
    &::after {
      /* 左上角弹出 */
      -webkit-transform: translateX(0%) translateY(0%);
      transform: translateX(0%) translateY(0%);
      border-radius: 0;
    }

    &::before {
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }

    &::after {
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }
  }
}
/* 遮罩层 --end */

:deep(.el-collapse) {
  border: none !important;
  --el-collapse-border-color: transparent;
}

:deep(.el-collapse-item__wrap) {
  background-color: transparent !important;
  border: none !important;
}

:deep(.el-collapse-item__header) {
  font-size: $headerFontSize;
  height: 1.04rem !important;
  /* margin-top: 0.25rem; */
  background-color: transparent !important;
  color: #000 !important;

  /* border-bottom: solid 1px #4f3fc1; */
  /* &:not(:first-of-type) { */
  /* border-top: solid 1px #4f3fc1; */
  /* } */
}

:deep(.color-ful-border-wrap) {
  width: 90%;
  height: 0.96rem;
  color: #000;

  .cover-mask {
    width: calc(100% - 6px);
    height: calc(100% - 4px);
  }
}

.color-btn {
  width: 100%;
  height: 0.96rem;
  color: #000;
  border-radius: 0.12rem;
}
</style>
