<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonTemplate',
  props: {
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'primary' }, // primary, danger, outline
    icon: { type: String, default: '' }
  },
  computed: {
    variantClass() {
      if (this.variant === 'danger') return 'btn-danger';
      if (this.variant === 'outline') return 'btn-outline-primary';
      return 'btn-primary';
    }
  }
})
</script>

<template>
  <button
    :type="type"
    :class="['btn', variantClass]"
    @click="$emit('btn-click')"
  >
    <i v-if="icon" :class="['fa mr-2', icon]"></i>
    <slot>Click Me</slot> </button>
</template>

<style scoped>
.btn {
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>
