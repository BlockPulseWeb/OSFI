<script setup lang="ts">
const isShowPanel = ref(false);
const setIsShowPanel = () => {
  isShowPanel.value = !isShowPanel.value;
};
</script>

<template>
  <div class="folder-wrap animate__animated fade-left">
    <header class="fold-header" @click="setIsShowPanel">
      <section class="fold-content">
        <slot name="face"> </slot>
        <div class="fold-title">
          <slot name="title"></slot>
        </div>
      </section>
      <img
        src="@img/common/arrow-right.svg"
        alt=""
        :class="['icon-arrow', { show: isShowPanel }]"
      />
    </header>

    <main :class="['fold-main', { show: isShowPanel }]">
      <slot name="content"></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.folder-wrap {
  @include -width(586rem, 100%, 586rem);
  /* height: 476rem; */
  padding: 25pw;

  box-shadow: inset 0px -4rem 0px 0px #ff9090, 0px 0 6rem 6rem rgba(11, 10, 33, 0.05);
  background-color: #fff;
  border-radius: 24rem;

  .fold-header {
    @include flexPos(space-between);
    cursor: pointer;

    .fold-content {
      display: flex;
      align-items: center;

      .fold-title {
        @include -font-size(24rem, 32pm, 32rem);
        font-weight: bold;
      }
    }
  }

  .icon-arrow {
    width: 20rem;
    transition: all 0.5s;

    &.show {
      transform: rotate(90deg);
    }
  }

  .fold-main {
    box-sizing: border-box;
    /* margin-top: 34rem; */
    /* padding: 9rem; */
    @include -font-size(24rem, 24pm, 24rem);

    color: #5d5d5d;
    font-family: Montserrat, Montserrat;
    transition: all 0.5s;

    height: 0;
    overflow: hidden;
    /* padding: 0; */

    &.show {
      height: 359rem;
      padding: 34rem 9rem 9rem 9rem;
    }
  }
}
</style>
