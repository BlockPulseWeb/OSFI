<script setup lang="ts">
import { useContact } from '@hooks/useContact';

const { contactList, launchTo } = useContact();
</script>

<template>
  <div class="footer-wrap">
    <div class="footer-main">
      <div class="mb-21">Find us</div>

      <div class="contact-list">
        <img
          :src="item.logo"
          alt=""
          v-for="(item, inx) in contactList"
          :key="inx"
          @click="launchTo(item.link)"
          class="contact-item"
        />
      </div>
    </div>

    <div class="copy-text">Copyright 2023 OSFI. Al Rights Reserved</div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrap {
  @include -margin-top(75rem, 500pm, 500pw);

  height: 283rem;
  font-size: 32rem;
  font-family: Montserrat, Montserrat;
  font-weight: 400;
  color: #000;
  /* background: linear-gradient(135deg, #3c82fa 0%, #ff00ff 50%, #f76c3e 100%); */
  background: linear-gradient(135deg, #3c82fa69 0%, #ff00ff6a 50%, #f76c3e57 100%);
  /* @include flexPos(space-between); */
  display: flex;
  justify-content: center;
  flex-direction: column;

  .contact-list {
    @include flexPos(center);

    .contact-item {
      width: 40rem;

      &:not(:first-child) {
        margin-left: 43rem;
      }
    }
  }

  .footer-main {
    @include flexPos(center);
    flex-direction: column;
    flex: auto;
  }

  .copy-text {
    font-size: 24rem;
    border-top: solid 2rem #000;
    @include flexPos(center);
    /* height: 74rem; */
    flex: 0 0 74rem;
  }
}
</style>
