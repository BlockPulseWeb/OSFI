<script setup lang="ts">
import Header from '@cps/Header/index.vue';
import IntroText from '@cps/IntroText/index.vue';
import HomeSlide from './HomeSlide/index.vue';
import Roadmap from './Roadmap/index.vue';
import FoldList from './FolderList/index.vue';
</script>

<template>
  <div class="home-wrap">
    <Header />

    <main class="home-main">
      <IntroText class="mt-222 md:mt-[204pm] lg:mt-[204pw]" dir="left">
        <template #thinText>
          OSFI is the abbreviation for Object-oriented System Finance, which stands for the next
          generation of object-oriented financial systems.
        </template>

        <template #boldText>
          <div>OSFI is a decentralized</div>
          <div>financial system</div>
          <div>based on the Bitcoin network,</div>
        </template>

        <template #main>
          <img src="@img/home/img-chain.png" alt="" class="sm:w-444 md:w-[373pw] mx-auto" />
        </template>
      </IntroText>

      <IntroText class="mt-128 md:mt-[204pm] lg:mt-[204pw]">
        <template #thinText>
          aiming to provide object-oriented, secure, efficient, and decentralized financial tools
          and services for the BTC main chain and its second-layer networks.
        </template>

        <template #boldText>
          <div>It strives to propel the</div>
          <div>financial industry towards</div>
          <div>a more open and</div>
          <div>innovative direction.</div>
        </template>

        <template #main>
          <img src="@img/home/img-chain2.png" alt="" class="sm:w-444 md:w-[373pw] mx-auto" />
        </template>
      </IntroText>

      <HomeSlide />

      <FoldList />

      <Roadmap />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home-wrap {
}

.home-main {
  background-color: skyblue;
  padding: 50px 44rem;
  @include -padding-x(44rem, 44pm, 0);
}
</style>
