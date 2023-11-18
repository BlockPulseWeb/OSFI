<script setup lang="ts">
import Header from '@cps/Header/index.vue';
import IntroText from '@cps/IntroText/index.vue';
import HomeSlide from './HomeSlide/index.vue';
import Roadmap from './Roadmap/index.vue';
import FoldList from './FolderList/index.vue';
import { useAppStore } from '@/store/appStore';
import ScrollOut from 'scroll-out';
import textifyJs from 'textify.js';

const appStore = useAppStore();

const isHightLight = ref(false);

onMounted(() => {
  ScrollOut({
    threshhold: 0.5,
    cssProps: {
      visibleY: true,
    },
  });

  ScrollOut({
    targets: '.zoom',
    offset: 0,
    onShown: function (el) {
      // // remove the class
      el.classList.remove('animate__zoomOutUp');

      // force reflow
      void el.offsetWidth;

      // re-add the animated cl
      el.classList.add('animate__zoomIn');
    },
    onHidden: function (el) {
      // remove the class
      el.classList.remove('animate__zoomIn');

      // force reflow
      void el.offsetWidth;

      // re-add the animated cl
      el.classList.add('animate__zoomOutUp');
    },
  });

  ScrollOut({
    targets: '.fade-left',
    offset: 0,
    onShown: function (el) {
      if (el.id === 'rightIntroText') {
        isHightLight.value = true;
      }
      // // remove the class
      el.classList.remove('animate__fadeOutLeft');
      el.classList.remove('hue-anima');

      // force reflow
      void el.offsetWidth;

      // re-add the animated cl
      el.classList.add('animate__fadeInLeft');

      setTimeout(() => {
        el.classList.remove('animate__fadeInLeft');
        el.classList.add('hue-anima');
      }, 2000);
    },
    onHidden: function (el) {
      if (el.id === 'rightIntroText') {
        isHightLight.value = false;
      }
      // remove the class
      el.classList.remove('animate__fadeInLeft');

      // force reflow
      void el.offsetWidth;

      // re-add the animated cl
      // el.classList.add('animate__fadeOutLeft');
    },
  });

  ScrollOut({
    targets: '.fade-right',
    offset: 0,
    onShown: function (el) {
      console.log('erlllll', el.id);
      // // remove the class
      el.classList.remove('animate__fadeOutRight');
      el.classList.remove('hue-anima');

      // force reflow
      void el.offsetWidth;

      // re-add the animated cl
      el.classList.add('animate__fadeInRight');

      setTimeout(() => {
        el.classList.remove('animate__fadeInRight');
        el.classList.add('hue-anima');
      }, 2000);
    },
    onHidden: function (el) {
      // remove the class
      el.classList.remove('animate__fadeInRight');

      // force reflow
      void el.offsetWidth;

      // el.classList.add('animate__fadeOutRight');
    },
  });
});
</script>

<template>
  <div class="home-wrap">
    <div class="color-ball color-ball-left"></div>
    <div class="color-ball color-ball-right"></div>

    <Header />

    <main :class="['home-main', { 'hight-light': isHightLight }]">
      <IntroText id="leftIntroText" class="mt-222 md:mt-[204pm] lg:mt-[204pw]" dir="left">
        <template #thinText>
          OSFI is the abbreviation for Object-oriented System Finance, which stands for the next
          generation of object-oriented financial systems.
        </template>

        <template #boldText>
          <div>OSFI is a decentralized</div>
          <div>financial system</div>
          <div>
            based on the
            <span v-if="appStore.curDevice !== 'phone'" :class="['hight-light-text']"
              >Bitcoin network,</span
            >
            <template v-else>
              <span :class="['hight-light-text']">Bitcoin</span>
              <span :class="['hight-light-text']">network,</span>
            </template>
          </div>
        </template>

        <template #main>
          <img
            src="@img/home/img-chain.png"
            alt=""
            class="sm:w-444 md:w-[373pw] mx-auto animate__animated fade-left"
          />
        </template>
      </IntroText>

      <IntroText id="rightIntroText" class="mt-128 md:mt-[204pm] lg:mt-[204pw]">
        <template #thinText>
          aiming to provide object-oriented, secure, efficient, and decentralized financial tools
          and services for the BTC main chain and its second-layer networks.
        </template>

        <template #boldText>
          <div>It strives to propel the</div>
          <div>financial industry towards</div>
          <div>a <span :class="['hight-light-text']">more open</span> and</div>
          <div>innovative direction.</div>
        </template>

        <template #main>
          <img
            src="@img/home/img-chain2.png"
            alt=""
            class="sm:w-444 md:w-[373pw] mx-auto animate__animated fade-right"
          />
        </template>
      </IntroText>

      <HomeSlide />

      <FoldList />
    </main>
    <Roadmap />
  </div>
</template>

<style lang="scss" scoped>
.home-wrap {
}

.home-main {
  /* background-color: skyblue; */
  padding: 50px 44rem;
  @include -padding-x(44rem, 44pm, 0);
}

.hight-light-text {
  position: relative;
  z-index: 1;

  &::after {
    transition: all 1s;
    content: '';
    position: absolute;
    width: 0%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(135deg, #3c82fa 0%, #ff00ff 50%, #f76c3e 100%);
    border-radius: 12rem;
    z-index: -1;
  }
}

.home-main.hight-light {
  .hight-light-text {
    &::after {
      width: 100% !important;
    }
  }
}

.color-ball {
  width: 100rem;
  height: 600rem;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  box-shadow: 0 0 3000px #c63dce;
  filter: blur(100px);
  /* backdrop-filter: blur(100px); */

  /* width: 950rem; */
  /* height: 950rem; */
  /* filter: blur(500px); */

  &.color-ball-left {
    background-color: #c63dce;
    left: 0;
    top: 35%;
  }

  &.color-ball-right {
    /* width: 250rem; */
    /* height: 250rem; */
    background-color: rgb(233, 87, 87);
    right: 0;
    top: 60%;
    /* transform: translateX(80%); */
  }
}
</style>
