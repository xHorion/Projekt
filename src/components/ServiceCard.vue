<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServiceCard',
  props: {
    image: { type: String, required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
})
</script>

<template>
  <div class="row align-items-center mb-5">
    <div class="col-sm-5">
      <img class="img-fluid mb-3 mb-sm-0 rounded shadow-sm" :src="image" :alt="title">
    </div>
    <div class="col-sm-7">
      <div class="d-flex align-items-center mb-3">
        <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mr-3"
             style="width: 45px; height: 45px;">
          <i :class="['fa', icon]"></i>
        </div>
        <h4 class="font-weight-bold m-0">{{ title }}</h4>
      </div>
      <p class="m-0 text-muted">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>

img {
  object-fit: cover;
  height: 200px;
  width: 100%;
}
</style>
