<script setup lang="ts"></script>

<template>
  <div class="about-wrap">
    <img src="@img/about/img-bitcoin.png" alt="" class="w-420 h-476 mt-200 mb-114" />

    <section class="about-content">
      <div class="about-title">Background</div>

      <div class="about-text">
        <li>
          Although numerous developers worldwide have been devoted to various developments within
          the BTC ecosystem since 2011, the market recognition of robust BTC ecosystem applications
          has been hindered due to the performance limitations of BTC.
        </li>

        <li>
          It wasn't until 2023 that the BRC20 breakthrough occurred, offering the public a glimpse
          of hope for the BTC ecosystem.
        </li>

        <li>
          Simultaneously, significant progress was made in the BTC ecosystem in 2023, giving rise to
          various native protocols such as Ordinals, Atomicals, PIPE, and others.
        </li>

        <li>
          The innovation within the BTC ecosystem has opened up new possibilities for Bitcoin.
        </li>
        <li>
          Against this backdrop, OSFI was founded. OSFI will gradually deploy various DEFI protocols
          on the BTC main chain and other high-performance second-layer networks, providing
          liquidity in the process.
        </li>
      </div>
    </section>

    <img src="@img/about/img-face.png" alt="" class="w-463 mt-200" />
  </div>
</template>

<style lang="scss" scoped>
.about-wrap {
  @include -width(100%, 90%, 1200rem);
  margin: 0 auto;
  @include flexPos(center);
  flex-direction: column;
  padding: 44rem;
}
.about-content {
  .about-title {
    font-size: 48rem;
    margin-bottom: 26rem;
    font-weight: 600;
  }
  .about-text {
    > li {
      font-size: 24rem;
      list-style-type: disc;
      &:not(:first-child) {
        margin-top: 30rem;
      }
    }
  }
}
</style>
