<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useContactStore } from '@/stores/ContactStore'
import NavbarHome from '@/components/NavbarHome.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import ButtonTemplate from '@/components/ButtonTemplate.vue'

export default defineComponent({
  name: 'HomeView',
  components: { ButtonTemplate, ScrollToTop, NavbarHome },
  computed: {
    ...mapState(useContactStore, ['messages', 'selectedMessage']),
  },
  methods: {
    ...mapActions(useContactStore, ['selectMessage', 'loadMessages']),

    toggleMessage(id: number) {
      if (this.selectedMessage && this.selectedMessage.id === id) {
        this.selectMessage(0)
      } else {
        this.selectMessage(id)
      }
    },
  },
  mounted() {
    this.loadMessages()
  },
})
</script>

<template>
  <NavbarHome />

  <div class="container-fluid p-0 mb-5">
    <div id="blog-carousel" class="carousel slide overlay-bottom" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="/img/carousel-1.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <h2 class="text-primary font-weight-medium m-0">We Have Been Serving</h2>
            <h1 class="display-1 text-white m-0">COFFEE</h1>
            <h2 class="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="/img/carousel-2.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <h2 class="text-primary font-weight-medium m-0">We Have Been Serving</h2>
            <h1 class="display-1 text-white m-0">COFFEE</h1>
            <h2 class="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#blog-carousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#blog-carousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>

  <div v-if="messages.length > 0" class="container mb-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center bg-secondary p-4 rounded shadow">
        <h4 class="text-primary text-uppercase" style="letter-spacing: 3px">Your inquiries</h4>
        <p class="text-white-50 small">Click on the application number to expand or collapse it.</p>

        <div class="d-flex flex-wrap justify-content-center mb-3">
          <ButtonTemplate
            v-for="msg in messages"
            :key="msg.id"
            @click="toggleMessage(msg.id)"
            :class="[
              'btn m-1',
              selectedMessage?.id === msg.id ? 'btn-primary' : 'btn-outline-primary text-white',
            ]"
          >
            №{{ msg.id.toString().slice(-5) }}
          </ButtonTemplate>
        </div>

        <div
          v-if="selectedMessage && selectedMessage.id !== 0"
          class="mt-3 p-4 bg-dark text-left rounded border border-primary animate__animated animate__fadeIn"
        >
          <h5 class="text-primary border-bottom border-secondary pb-2">Details of the appeal</h5>
          <div class="text-white mt-3">
            <p><strong>Client:</strong> {{ selectedMessage.name }}</p>
            <p><strong>Email:</strong> {{ selectedMessage.email }}</p>
            <p><strong>Message:</strong></p>
            <div class="p-3 bg-secondary rounded" style="font-style: italic">
              "{{ selectedMessage.message }}"
            </div>
            <p class="text-right small text-muted mt-2">Date sent: {{ selectedMessage.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ScrollToTop />
</template>

<style scoped>
.bg-dark {
  background-color: #1a1a1a !important;
}
.shadow {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
}
.btn-outline-primary {
  border-color: #da9f5b;
  color: #da9f5b;
}
.btn-outline-primary:hover {
  background-color: #da9f5b;
  color: #33211d;
}
.animate__fadeIn {
  animation: fadeIn 0.4s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
