<script setup lang="ts"></script>

<template>
  <div class="header-wrap">
    <div class="header-text">
      Next-Generation Decentralized Financial System With An Object-Oriented Approach
    </div>
    <button class="learn-more-btn">Learn More</button>
  </div>
</template>

<style lang="scss" scoped>
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
  border-radius: 0 0 80rem 80rem;
  @include -padding-top(130rem, 202rem, 202rem);
  text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);

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
  }
}
</style>
