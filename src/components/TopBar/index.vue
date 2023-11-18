<script setup lang="ts">
import PcTopBar from './PcTopBar.vue';
import MobTopBar from './MobTopBar.vue';
import { useAppStore } from '@/store/appStore';
const appStore = useAppStore();
</script>

<template>
  <PcTopBar v-if="appStore.curDevice !== 'phone'" />
  <MobTopBar v-else />
</template>

<style lang="scss" scoped></style>
