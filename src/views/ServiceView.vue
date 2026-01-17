<script>
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import NavbarHome from '@/components/NavbarHome.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import ServiceCard from '@/components/ServiceCard.vue'

export default defineComponent({
  name: 'ServiceView',
  components: { ServiceCard, ScrollToTop, NavbarHome, PageHeader },
})
</script>

<template>
  <PageHeader title="Services" />
  <NavbarHome />
  <div class="container-fluid pt-5">
    <div class="container">
      <div class="section-title">
        <h4 class="text-primary text-uppercase" style="letter-spacing: 5px">Our Services</h4>
        <h1 class="display-4">Fresh & Organic Beans</h1>
      </div>

        <div class="row pt-5">
          <div class="col-lg-6 mb-5">
            <ServiceCard
              image="/img/service-1.jpg"
              icon="fa-truck"
              title="Fastest Door Delivery"
              description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed duo. Guberg sea et et lorem dolor sed duo."
            />
          </div>

          <div class="col-lg-6 mb-5">
            <ServiceCard
              image="/img/service-2.jpg"
              icon="fa-coffee"
              title="Fresh Coffee Beans"
              description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed duo. Guberg sea et et lorem dolor sed duo."
            />
          </div>

          <div class="col-lg-6 mb-5">
            <ServiceCard
              image="/img/service-3.jpg"
              icon="fa-award"
              title="Best Quality Coffee"
              description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            />
          </div>

          <div class="col-lg-6 mb-5">
            <ServiceCard
              image="/img/service-4.jpg"
              icon="fa-table"
              title="Online Table Booking"
              description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            />
          </div>
        </div>
      </div>
    </div>

  <ScrollToTop />
</template>

<style scoped></style>
