<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';
import ScreenLoader from '@/components/ScreenLoader.vue'
</script>

<template>
  <ScreenLoader /> <router-view />

  <AppFooter />

</template>

<style scoped>

</style>
