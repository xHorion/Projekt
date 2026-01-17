<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'pinia'
import { useReservationStore } from '@/stores/reservationStore'
import PageHeader from '@/components/PageHeader.vue'
import NavbarHome from '@/components/NavbarHome.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import ButtonTemplate from '@/components/ButtonTemplate.vue'

export default defineComponent({
  name: 'ReservationView',
  components: { ButtonTemplate, ScrollToTop, NavbarHome, PageHeader },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        date: '',
        tableNumber: null as number | null,
      },
    }
  },
  computed: {
    ...mapState(useReservationStore, ['reservations']),

    isTableOccupied(): boolean {
      if (!this.formData.date || !this.formData.tableNumber) return false

      return this.reservations.some(
        (res) => res.date === this.formData.date && res.tableNumber === this.formData.tableNumber,
      )
    },

    canSubmit(): boolean {
      return (
        this.formData.name.length > 0 &&
        this.formData.email.includes('@') &&
        this.formData.date !== '' &&
        this.formData.tableNumber !== null &&
        !this.isTableOccupied
      )
    },
  },
  methods: {
    ...mapActions(useReservationStore, ['addReservation', 'clearAllReservations']),

    handleBooking() {
      if (this.isTableOccupied) return

      const newBooking = {
        name: this.formData.name,
        email: this.formData.email,
        date: this.formData.date,
        tableNumber: this.formData.tableNumber as number,
      }

      this.addReservation(newBooking)

      alert(
        `Success! Table №${this.formData.tableNumber} has been reserved for ${this.formData.date}`,
      )

      this.formData.name = ''
      this.formData.email = ''
      this.formData.date = ''
      this.formData.tableNumber = null
    },

    confirmClear() {
      if (confirm('Are you sure you want to delete all bookings?')) {
        this.clearAllReservations();
      }
    }
  },
  mounted() {
    const store = useReservationStore()
    store.loadReservations()
  },
})
</script>

<template>
  <PageHeader title="Reservation" />
  <NavbarHome />

  <div class="container-fluid py-5">
    <div class="container">
      <div class="reservation position-relative overlay-top overlay-bottom">
        <div class="row align-items-center">
          <div class="col-lg-6 my-5 my-lg-0">
            <div class="p-5">
              <div class="mb-4">
                <h1 class="display-3 text-primary">30% OFF</h1>
                <h1 class="text-white">Online Reservation</h1>
              </div>
              <p class="text-white">Reserve your favorite table in advance.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-center p-5" style="background: rgba(51, 33, 29, 0.8)">
              <h1 class="text-white mb-4 mt-5">Book Your Table</h1>
              <form id="reservation-form" class="mb-5" @submit.prevent="handleBooking">
                <div class="form-group">
                  <input
                    v-model="formData.name"
                    type="text"
                    class="form-control bg-transparent border-primary p-4"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="formData.email"
                    type="email"
                    class="form-control bg-transparent border-primary p-4"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="formData.date"
                    type="date"
                    class="form-control bg-transparent border-primary p-4"
                    required
                  />
                </div>
                <div class="form-group">
                  <select
                    v-model.number="formData.tableNumber"
                    class="custom-select bg-transparent border-primary px-4"
                    style="height: 49px"
                    required
                  >
                    <option :value="null" disabled>Select Table (1-10)</option>
                    <option v-for="n in 10" :key="n" :value="n">Table №{{ n }}</option>
                  </select>
                  <small v-if="isTableOccupied" class="text-danger mt-2 d-block"
                  >This table is already reserved for that date!</small
                  >
                </div>

                <div>
                  <ButtonTemplate type="submit" :disabled="!canSubmit">Book Now</ButtonTemplate>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div v-if="reservations.length > 0" class="mt-5 text-center">
        <h3 class="text-primary text-uppercase mb-4">Recent Bookings</h3>

        <ButtonTemplate
          variant="danger"
          icon="fa-trash"
          class="mb-3"
          @btn-click="confirmClear"
        >
          Clear All Bookings
        </ButtonTemplate>

        <div class="table-responsive">
          <table class="table table-bordered table-dark mt-3">
            <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Table Number</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(res, index) in reservations" :key="index">
              <td>{{ res.name }}</td>
              <td>{{ res.date }}</td>
              <td>{{ res.tableNumber }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <ScrollToTop />
</template>
