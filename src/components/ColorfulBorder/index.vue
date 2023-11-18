<!-- <ColorfulBorder
:width="applyBtnSize.w"
:height="applyBtnSize.h"
padding="0.1rem"
round="0.05rem"
class="text-[#fff] cursor-pointer"
@click="doApply(item.id)"
>
<div
  class="relative z-10 flex justify-center items-center h-full w-full text-0.22rem md:text-0.16rem"
>
  Apply
</div>
</ColorfulBorder> -->
<script setup lang="ts">
const props = defineProps<{
  width?: number;
  height?: number;
  padding?: string;
  round?: string;
}>();
</script>

<template>
  <div
    :class="[`color-ful-border-wrap`]"
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
      padding: props.padding,
      borderRadius: props.round,
    }"
  >
    <div
      class="cover-mask"
      :style="{
        width: props.width - 6 + 'px',
        height: props.height - 4 + 'px',
        borderRadius: props.round,
      }"
    ></div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.color-ful-border-wrap {
  position: relative;
  background-image: linear-gradient(to right bottom, #e942b4, #1e46d4);
  /* padding: v-bind(props.padding); */
  /* padding: 0.1rem; */

  .cover-mask {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    background-color: #000;
  }
}
</style>
