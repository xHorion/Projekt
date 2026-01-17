<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useReservationStore } from '@/stores/ReservationStore'

export default defineComponent({
  name: 'CartQuickView',
  data() {
    return { animate: false }
  },
  computed: {
    ...mapState(useReservationStore, ['reservations']),
    totalItems() { return this.reservations.length }
  },
  watch: {
    totalItems(newVal, oldVal) {
      if (newVal > oldVal) {
        this.animate = true;
        setTimeout(() => { this.animate = false; }, 500);
      }
    }
  },
  methods: {
    goToReservations() {
      this.$router.push('/reservation');
    }
  }
})
</script>

<template>
  <div class="cart-nav-item d-flex align-items-center mx-3" @click="goToReservations" style="cursor: pointer;">
    <div class="position-relative">
      <i class="fa fa-shopping-cart text-primary" :class="{ 'bounce-ani': animate }" style="font-size: 1.2rem;"></i>
      <span class="badge badge-primary position-absolute"
            style="top: -10px; right: -10px; font-size: 0.7rem; border-radius: 50%;">
  {{ totalItems }}
</span>
    </div>
  </div>
</template>


<style scoped>
.bounce-ani { animation: bounce 0.5s; }
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.cart-nav-item:hover i {
  color: #ffffff !important;
  transition: 0.3s;
}
</style>
