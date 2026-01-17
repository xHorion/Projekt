import { defineStore } from 'pinia'

export interface Reservation {
  name: string;
  email: string;
  date: string;
  tableNumber: number;
}

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    reservations: [] as Reservation[]
  }),
  actions: {
    addReservation(booking: Reservation) {
      this.reservations.push(booking);
      localStorage.setItem('coffee_bookings', JSON.stringify(this.reservations));
    },
    loadReservations() {
      const saved = localStorage.getItem('coffee_bookings');
      if (saved) {
        this.reservations = JSON.parse(saved);
      }
    },
    clearAllReservations() {
      this.reservations = [];
      localStorage.removeItem('coffee_bookings');
    }
  }
})
