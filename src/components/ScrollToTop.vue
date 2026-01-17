<script lang="ts">
import { defineComponent } from 'vue'
import ButtonTemplate from '@/components/ButtonTemplate.vue'

export default defineComponent({
  name: 'ScrollToTop',
  components: { ButtonTemplate },
  data() {
    return {
      isVisible: true,
      hasIcon: true,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
})
</script>

<template>
  <ButtonTemplate
    v-if="isVisible"
    @click="scrollToTop"
    class="btn btn-primary"
    style="
      position: fixed !important;
      bottom: 20px !important;
      right: 20px !important;
      z-index: 9999 !important;
      width: 50px;
      height: 50px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    "
  >
    <i class="fa fa-angle-double-up" style="font-size: 20px"></i>
  </ButtonTemplate>
</template>
