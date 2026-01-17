<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageLoader',
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    // Імітація завантаження сторінки
    setTimeout(() => {
      this.isLoaded = true;
    }, 1500); // 1.5 секунди
  }
})
</script>

<template>
  <div v-if="!isLoaded" class="loader-wrapper">
    <div class="loader-content">
      <i class="fa fa-coffee fa-3x text-primary mb-3 pulse"></i>
      <h5 class="text-white text-uppercase" style="letter-spacing: 3px;">Koppee Loading...</h5>
      <div class="progress-bar-container">
        <div class="progress-line"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #33211d; /* Твій колір фону */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}
.loader-content { text-align: center; }
.pulse { animation: pulse 1s infinite ease-in-out; }
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.progress-bar-container {
  width: 200px;
  height: 2px;
  background: rgba(255,255,255,0.1);
  margin-top: 15px;
  overflow: hidden;
}
.progress-line {
  width: 100%;
  height: 100%;
  background: #da9f5b;
  animation: loading 1.5s infinite;
}
@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>
