<script setup lang="ts">
const props = defineProps<{
  dir?: 'left' | 'right'; // left图在左边
}>();
</script>

<template>
  <div :class="['intro-text-wrap sm:px-0 md:px-0', { left: props.dir === 'left' }]">
    <div class="text-content">
      <div class="thin-text">
        <slot name="thinText"></slot>
      </div>

      <div class="bold-text">
        <slot name="boldText"></slot>
      </div>
    </div>

    <!-- <img src="@img/home/img-chain.png" alt="" class="w-444 mx-auto mt-66" /> -->
    <div
      :class="[`img-content sm:mt-66 md:mt-0 ${props.dir === 'left' ? 'mr-[103pw]' : 'ml-[42pw]'}`]"
    >
      <slot name="main"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-text-wrap {
  color: #000;
  /* margin-top: 282rem; */
  /* @include -margin-top(222rem, 204pm, 204pw); */
  font-family: Montserrat-SemiBold, Montserrat;
  /* @include -padding-x(44rem, 360pm, 360pw); */
  @include -width(100%, 100%, 1300rem);
  margin-left: auto;
  margin-right: auto;
  /* background-color: red; */

  @media (min-width: $phone) {
    @include flexPos(center);
  }

  .text-content {
  }

  .thin-text {
    @include -font-size-a(24);
  }

  .bold-text {
    margin-top: 30rem;
    @include -font-size-a(48);
    font-weight: bold;

    @media (min-width: $phone) {
      white-space: nowrap;
    }
  }
}

.intro-text-wrap.left {
  > .img-content {
    order: 1;
  }
  > .text-content {
    order: 2;
  }
}

.img-content {
}
</style>
