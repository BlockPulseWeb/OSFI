<script setup lang="ts">
//@ts-ignore
import { KawaseBlurFilter } from 'https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0';
//@ts-ignore
import * as PIXI from 'https://cdn.skypack.dev/pixi.js@5.x';
import Orb from './Orb';
import ColorPalette from './ColorPalette';

// import debounce from 'https://cdn.skypack.dev/debounce';
import { getRandom } from '@/utils/tools';
// import { useScrollThrottle } from '@/hooks/useScrollCallback';

const props = defineProps<{
  dir: 'left' | 'right';
  color?: string;
}>();

let pixiAppIns;
const orbs = [];

const renderColorFul = () => {
  // Create PixiJS app
  pixiAppIns = new PIXI.Application({
    // render to <canvas class="orb-canvas"></canvas>
    view: orbCas.value,
    // auto adjust size to fit the current window
    // resizeTo: window,
    // transparent background, we will be creating a gradient background later using CSS
    transparent: true,
  });

  pixiAppIns.stage.filters = [new KawaseBlurFilter(30, 10, true)];

  const colorPalette = new ColorPalette(props.color || '#3C81F9');
  for (let i = 0; i < 10; i++) {
    const orb = new Orb(+colorPalette.randomColor(), props.dir);

    pixiAppIns.stage.addChild(orb.graphics);

    orbs.push(orb);
  }

  // Animate!
  pixiAppIns.ticker.add(() => {
    // console.log('tricccccc');
    orbs.forEach((orb) => {
      orb.update();
      orb.render();
    });
  });

  /* if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pixiAppIns.ticker.add(() => {
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    });
  } else {
    orbs.forEach((orb) => {
      orb.update();
      orb.render();
    });
  } */

  /**
   * 点击某处换颜色
   */
  /* document.querySelector('.mainContainer').addEventListener('click', () => {
    colorPalette.setColors();
    colorPalette.setCustomProperties();

    orbs.forEach((orb) => {
      orb.fill = colorPalette.randomColor();
    });
  }); */
};

const orbCas = ref(null);

onMounted(() => {
  renderColorFul();
});

onBeforeUnmount(() => {
  orbs.forEach((orb) => {
    orb.destroy();
  });
  orbs.length = 0;
  pixiAppIns.ticker.destroy();
});
</script>

<template>
  <canvas class="orb-canvas" ref="orbCas"></canvas>
</template>

<style lang="scss">
.orb-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99;
  opacity: 0.6;
}

/* Not too many browser support this yet but it's good to add! */
@media (prefers-contrast: high) {
  .orb-canvas {
    display: none;
  }
}
</style>
