<script setup lang="ts">
import { reactive } from 'vue';
import Line from './Line.vue';

const mapList = reactive([
  {
    id: 1,
    year: '2023',
    month: '05',
    text: 'OSFI was founded, initiating protocol research.',
  },
  {
    id: 2,
    year: '2023',
    month: '09',
    text: 'The native BRC20 token of the system, OSFI, was launched.',
  },
  {
    id: 3,
    year: '2023',
    month: '10',
    text: `OSFI's first test liquidity protocol was deployed and tested on the Bitcoin Lightning Network, Taproot Assets.`,
  },
  {
    id: 4,
    year: '2023',
    month: '11',
    text: `OSFI entered into a strategic cooperation agreement with the renowned Bitcoin sidechain, Rootstock Infrastructure Framework, to jointly develop RSK (Rootstock) with compatible EVM smart contracts.`,
  },
  {
    id: 5,
    year: '2024',
    month: '06',
    text: `Released the decentralized exchange on the BTC ecosystem, OS Swap.`,
  },
  {
    id: 6,
    year: '2024',
    month: '07',
    text: `Launched the staking platform, OS Stack, and the decentralized governance organization, OS DAO.`,
  },
  {
    id: 7,
    year: '2024',
    month: '12',
    text: `Unveiled the prediction market platform based on the BTC Lightning Network, OS Futura.`,
  },
]);

const swiperOptions = reactive({
  // 属性加上这个
  slidesPerView: 3, //设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'值，会根据容器container的宽度调整slides数目。
  direction: 'vertical',
  spaceBetween: 100, // 每个item的间距，也可以用scss穿透实现
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true, // 开启分页器
  // },
});
</script>

<template>
  <div class="roadmap-wrap mx-auto">
    <Line />

    <bp-swiper :option="swiperOptions">
      <swiper-slide v-for="(mapItem, inx) in mapList" :key="inx">
        <div class="item-container">
          <div class="item-time">
            <!-- <img :src="mapItem.img" alt="" class="item-img" /> -->
            <div>{{ mapItem.year }}</div>
            <div>{{ mapItem.month }}</div>
          </div>

          <div class="item-content">{{ mapItem.text }}</div>
        </div>
      </swiper-slide>
    </bp-swiper>

    <!-- className为这个即可 -->
    <!-- <div class="swiper-pagination mt-0.2rem !bottom-0 !relative"></div> -->
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';

.roadmap-wrap {
  @include -width(100%, 100%, 1200rem);
  @include -height(830rem, 830rem, 830rem);
  @include -margin-top(300rem, 500rem, 500rem);
  position: relative;
  @include flexPos(center);
  /* background-color: plum; */

  :deep(.swiper) {
    width: 100%;
    height: 100%;
    @include -padding-x(0, 60rem, 60rem);

    .swiper-slide {
      text-align: center;
      @include -font-size(18rem, 18rem, 18rem);
      background: #fff;
      @include flexPos(flex-start, center);
      opacity: 0.6;

      .item-container {
        @include flexPos(flex-start);
        /* background-color: pink; */
        transition: all 0.7s;
        padding: 9rem 22rem;
      }
    }

    .item-time {
      @include -font-size(24rem, 24rem, 24rem);
      transition: font-size 0.3s;
    }

    .item-content {
      margin-left: 100rem;
      @include -font-size(24rem, 16rem, 16rem);
      /* transition: font-size 0.1s; */
    }

    .swiper-slide-active {
      z-index: 99;
      opacity: 1;

      .item-container {
        /* transform: scale(1.7); */
        /* @include -font-size(24rem, 24rem, 24rem); */
        background-color: #fff6f6;
        /* padding: 9rem 22rem; */
      }

      .item-time {
        @include -font-size(48rem, 24rem, 24rem);
        /* transform: scale(1.7); */
        font-weight: bold;
      }

      .item-content {
        margin-left: 100rem;
        @include -font-size(24rem, 24rem, 24rem);
        /* transform: scale(1.2); */
        /* height: 250rem; */
      }
    }
  }
}
</style>
