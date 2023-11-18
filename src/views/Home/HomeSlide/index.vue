<script setup lang="ts">
import { reactive } from 'vue';
import { useAppStore } from '@/store/appStore';
import { useHomeSlide } from './useHomeSlide';

const appStore = useAppStore();

const { slideList } = useHomeSlide();

const swiperOptions = computed(() => {
  return {
    // 属性加上这个
    slidesPerView: appStore.curDevice === 'phone' ? 'auto' : 3, //设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'值，会根据容器container的宽度调整slides数目。
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // 开启分页器
    },
  };
});
</script>

<template>
  <div class="home-slide-wrap animate__animated fade-left">
    <bp-swiper :option="swiperOptions">
      <swiper-slide v-for="slideItem in slideList" :key="slideItem.id">
        <div class="item-container">
          <img :src="slideItem.img" alt="" class="item-img" />
          <div class="slide-title">
            {{ slideItem.title }}
          </div>
          <div class="slide-text">
            {{ slideItem.text }}
          </div>
        </div>
      </swiper-slide>
    </bp-swiper>

    <!-- className为这个即可 -->
    <div class="swiper-pagination mt-0.2rem !bottom-0 !relative"></div>
  </div>
</template>

<style lang="scss" scoped>
.home-slide-wrap {
  @include -margin-top(294rem, 500pm, 500pw);

  /* width: 660px; */
  // swiper 穿透
  :deep(.swiper) {
    position: relative;
    @include -width(650rem, 100%, 1200pw);
    margin: 0.8rem auto;
    // min-height: 6.05rem;
    // background: yellow;

    .swiper-wrapper {
      align-items: center;
    }

    .swiper-slide {
      text-align: center;
      @include flexPos(center);
      /* opacity: 0.5; */
    }

    .swiper-slide-active {
      z-index: 99;
      opacity: 1;

      @media (min-width: $phone) {
        .item-container {
          /* transform: scale(1.7); */
          filter: none;

          .slide-title {
            @include -font-size(40rem, 22pm, 22pw);
          }
        }
      }
    }

    .item-container {
      transition: 0.8s;
      @include flexPos(center);
      flex-direction: column;
      @include -height(800rem, 500pm, 500pw);
      /* background-color: red; */
      background: linear-gradient(180deg, #fff5f5 0%, #fff5fb 0%, rgba(255, 245, 245, 0) 100%);
      /* background-color: red; */
      border-radius: 80rem 80rem 0px 0px;

      /* @media (min-width: $phone) {
        filter: blur(3px);
      } */

      .item-img {
        cursor: pointer;
        @include -width-a(195);
        border-radius: 0.1rem;
      }

      .slide-title {
        margin-top: 30rem;
        @include -font-size(40rem, 22pm, 22pw);
        font-weight: bold;
      }

      .slide-text {
        margin-top: 12rem;
        @include -font-size(24rem, 18pm, 18pw);
        @include -padding-x(60rem, 0, 0);
      }
    }
  }
}

:deep(.swiper-pagination) {
  .swiper-pagination-bullet {
    background-color: #ecd8d8;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #ff8f8f;
  }
}
</style>
