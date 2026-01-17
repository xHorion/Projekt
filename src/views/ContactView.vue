<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useContactStore } from '@/stores/contactStore'
import PageHeader from '@/components/PageHeader.vue'
import NavbarHome from '@/components/NavbarHome.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import ButtonTemplate from '@/components/ButtonTemplate.vue'

export default defineComponent({
  name: 'ContactView',
  components: { ButtonTemplate, ScrollToTop, NavbarHome, PageHeader },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    ...mapActions(useContactStore, ['sendMessage']),

    handleSubmit() {
      this.sendMessage({ ...this.formData })
      alert(`Your request has been sent!`)
      this.formData = { name: '', email: '', message: '' }
      this.$router.push('/')
    },
  },
})
</script>

<template>
  <PageHeader title="CONTACT" />
  <NavbarHome />
  <div class="container-fluid pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="contact-form bg-secondary p-5">
            <form @submit.prevent="handleSubmit">
              <div class="control-group mb-3">
                <input
                  v-model="formData.name"
                  type="text"
                  class="form-control bg-transparent p-4"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="control-group mb-3">
                <input
                  v-model="formData.email"
                  type="email"
                  class="form-control bg-transparent p-4"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="control-group mb-3">
                <textarea
                  v-model="formData.message"
                  class="form-control bg-transparent py-3 px-4"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <ButtonTemplate type="submit">
                  Send Message
                </ButtonTemplate>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ScrollToTop />
</template>
