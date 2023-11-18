<script setup lang="ts">
const props = defineProps<{
  opening: boolean; // 是否正在打开状态：true:×，false:三横
  color?: string; // 颜色
  size?: 'sm' | 'md'; // 尺寸
}>();

// 默认颜色
const color = computed(() => props.color || '#FFF');
</script>

<template>
  <div :class="['bp-close-wrap', { opening: props.opening }, props.size]">
    <div :class="['bar', props.size]"></div>
    <div :class="['bar', props.size]"></div>
    <div :class="['bar', props.size]"></div>
  </div>
</template>

<style lang="scss" scoped>
.bp-close-wrap {
  /* $boxHeight: 30px; */
  $barHeight: 2px;
  cursor: pointer;

  height: 14px;
  @include flexPos(space-between, flex-start);
  flex-direction: column;

  &.md {
    height: 20px;
  }

  .bar {
    transition: 0.4s;
    width: 20px;
    height: $barHeight;
    background-color: v-bind(color);
    transform-origin: center;
    border-radius: 100px;

    &:nth-child(3) {
      width: 15px;
    }
  }

  .bar.sm {
    width: 15px !important;
    &:nth-child(3) {
      width: 10px !important;
    }
  }

  .bar.md {
    width: 26px !important;
    &:nth-child(3) {
      width: 18px !important;
    }
  }

  &.opening {
    .bar {
      border-radius: 0;
    }
    .bar:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      width: 20px;
      transform: translateY(-6px) rotate(-45deg);
    }

    .sm {
      &.bar:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }
      &.bar:nth-child(2) {
        opacity: 0;
      }
      &.bar:nth-child(3) {
        width: 15px;
        transform: translateY(-6px) rotate(-45deg);
      }
    }

    .md {
      &.bar:nth-child(2) {
        opacity: 0;
      }
      &.bar:nth-child(3) {
        width: 15px;
        transform: translateY(-12px) rotate(-45deg);
      }
      &.bar:nth-child(3) {
        width: 26px !important;
        transform: translateY(-12px) rotate(-45deg);
      }
    }
  }
}
</style>
