<script>
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import NavbarHome from '@/components/NavbarHome.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

export default defineComponent({
  name: 'TestimonialView',
  components: { ScrollToTop, NavbarHome, PageHeader },
})
</script>

<template>
  <PageHeader title="Testimonial"/>
  <NavbarHome />
  <div class="container-fluid py-5">
    <div class="container">
      <div class="section-title">
        <h4 class="text-primary text-uppercase" style="letter-spacing: 5px">Testimonial</h4>
        <h1 class="display-4">Our Clients Say</h1>
      </div>
      <div class="owl-carousel testimonial-carousel">
        <div class="testimonial-item">
          <div class="d-flex align-items-center mb-3">
            <img class="img-fluid" src="/img/testimonial-1.jpg" alt="" />
            <div class="ml-3">
              <h4>Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
          <p class="m-0">
            Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor
            tempor ipsum sanct clita
          </p>
        </div>
        <div class="testimonial-item">
          <div class="d-flex align-items-center mb-3">
            <img class="img-fluid" src="/img/testimonial-2.jpg" alt="" />
            <div class="ml-3">
              <h4>Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
          <p class="m-0">
            Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor
            tempor ipsum sanct clita
          </p>
        </div>
        <div class="testimonial-item">
          <div class="d-flex align-items-center mb-3">
            <img class="img-fluid" src="/img/testimonial-3.jpg" alt="" />
            <div class="ml-3">
              <h4>Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
          <p class="m-0">
            Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor
            tempor ipsum sanct clita
          </p>
        </div>
        <div class="testimonial-item">
          <div class="d-flex align-items-center mb-3">
            <img class="img-fluid" src="/img/testimonial-4.jpg" alt="" />
            <div class="ml-3">
              <h4>Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
          <p class="m-0">
            Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor
            tempor ipsum sanct clita
          </p>
        </div>
      </div>
    </div>
  </div>
  <ScrollToTop/>
</template>

<style scoped></style>
