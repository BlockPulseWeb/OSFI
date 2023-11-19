<script setup lang="ts"></script>

<template>
  <div class="line-wrap">
    <li class="line-item line-item1"></li>
    <li class="line-item line-item2 active"></li>
    <li class="line-item line-item3"></li>
  </div>
</template>

<style lang="scss" scoped>
.line-wrap {
  @include -width(160rem, 180rem, 180rem);
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-right: dashed 1px #ff5e5e6a;
  z-index: 999;

  > .line-item {
    border-radius: 50%;
    background-color: #ff5e5eec;
    position: absolute;
    right: 0;
    transform: translateX(50%);
    opacity: 1;
    z-index: 9;
    @include -width(16rem, 16rem, 16rem);
    @include -height(16rem, 16rem, 16rem);

    &.active {
      @include -width(25rem, 25rem, 25rem);
      @include -height(25rem, 25rem, 25rem);
      opacity: 1;
      background-color: #ff6565;
    }

    &.line-item1 {
      @include -top(70rem, 100rem, 100rem);
    }
    &.line-item2 {
      @include -top(410rem, 405rem, 405rem);
    }
    &.line-item3 {
      @include -top(750rem, 720rem, 720rem);
    }
  }
}
</style>
