import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from '@/views/AboutView.vue'
import ServiceView from '@/views/ServiceView.vue'
import ReservationView from '@/views/ReservationView.vue'
import MenuView from '@/views/MenuView.vue'
import TestimonialView from '@/views/TestimonialView.vue'
import ContactView from '@/views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/service',
      name: 'Service',
      component: ServiceView,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MenuView,
    },
    {
      path: '/testimonial',
      name: 'Testimonial',
      component: TestimonialView,
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: ReservationView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
  ],
})

export default router
