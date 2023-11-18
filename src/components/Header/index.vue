<script setup lang="ts">
import ColorfulBallBg from '@cps/ColorfulBallBg/index.vue';

const showColorful = ref(false);
setTimeout(() => {
  showColorful.value = true;
}, 1000);
const showColorfulBallBg = computed(() => {
  return showColorful.value;
});
</script>

<template>
  <div class="header-wrap">
    <div class="header-text">
      Next-Generation Decentralized Financial System With An Object-Oriented Approach
    </div>
    <button class="learn-more-btn">Learn More</button>

    <div class="color-full-balls" v-if="showColorfulBallBg">
      <ColorfulBallBg dir="left" />
      <ColorfulBallBg dir="right" color="#FF00FF" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin round {
  border-radius: 0 0 80rem 80rem;
}

.header-wrap {
  position: relative;
  @include -height(772rem, 960rem, 960rem);
  background-color: #0f0f36;
  @include -font-size(64rem, 94pm, 94rem);
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  padding-top: 90rem;
  @include -padding-top(130rem, 202rem, 202rem);
  text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  @include round;

  .header-text {
    padding: 20rem 449rem 0;

    @media (max-width: $pc) {
      padding: 20rem 30rem 0;
    }
  }

  .learn-more-btn {
    background-color: #101137;
    font-size: 32rem;
    color: #fff;
    border-radius: 202rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    padding: 44rem 0;
    @include -width(534rem, 503rem, 503rem);
    z-index: 999;
  }

  .color-full-balls {
    width: 100%;
    @include -height(772rem, 960rem, 960rem);

    @include round;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
