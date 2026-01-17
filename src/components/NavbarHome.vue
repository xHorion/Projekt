<script>
import CartQuickView from '@/components/CartQuickView.vue'
import ButtonTemplate from '@/components/ButtonTemplate.vue'

export default {
  name: 'NavbarHome',
  components: { ButtonTemplate, CartQuickView },
}
</script>

<template>
  <div class="container-fluid p-0 nav-bar navbar-home">
    <nav class="navbar navbar-expand-lg bg-none navbar-dark py-3">
      <router-link to="/" class="navbar-brand ml-lg-3">
        <h1 class="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
      </router-link>

      <ButtonTemplate
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </ButtonTemplate>

      <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav ml-auto p-4">
          <CartQuickView />
          <router-link to="/" class="nav-item nav-link" active-class="active">Home</router-link>
          <router-link to="/about" class="nav-item nav-link" active-class="active"
            >About</router-link
          >
          <router-link to="/service" class="nav-item nav-link" active-class="active"
            >Service</router-link
          >
          <router-link to="/menu" class="nav-item nav-link" active-class="active">Menu</router-link>

          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
            <div class="dropdown-menu text-capitalize">
              <router-link to="/reservation" class="dropdown-item" active-class="active"
                >Reservation</router-link
              >
              <router-link to="/testimonial" class="dropdown-item" active-class="active"
                >Testimonial</router-link
              >
            </div>
          </div>
          <router-link to="/contact" class="nav-item nav-link" active-class="active"
            >Contact</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-home {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent !important;
}
</style>
