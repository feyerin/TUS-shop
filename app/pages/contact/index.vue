<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const sendToWhatsApp = () => {
  if (!form.name || !form.email || !form.message) {
    alert('Please fill all fields')
    return
  }

  const phone = '6281234567890'

  const text = `Hello, I would like to contact you.

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`

  const encoded = encodeURIComponent(text)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank')

  // reset form
  Object.assign(form, {
    name: '',
    email: '',
    message: ''
  })
}
</script>

<template>
  <section class="py-28 px-6 md:px-10 max-w-7xl mx-auto">

    <!-- HEADER -->
    <div class="text-center mb-24">
      <p class="text-xs tracking-[0.4em] text-gray-400 mb-3">
        GET IN TOUCH
      </p>

      <h1 class="text-[36px] md:text-[56px] font-light">
        Contact <span class="italic font-secondary">Us</span>
      </h1>

      <p class="text-sm text-gray-500 mt-5 max-w-md mx-auto font-secondary">
        We'd love to hear from you.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-20 py-12">

      <!-- LEFT INFO -->
      <div class="space-y-12 text-sm text-gray-600">

        <!-- ITEM -->
        <div class="group flex items-start gap-4">
          <div class="icon">@</div>
          <div>
            <p class="label">EMAIL</p>
            <p class="hover-text">hello@yourbrand.com</p>
          </div>
        </div>

        <div class="group flex items-start gap-4">
          <div class="icon">☎</div>
          <div>
            <p class="label">PHONE</p>
            <p class="hover-text">+62 812 3456 7890</p>
          </div>
        </div>

        <div class="group flex items-start gap-4">
          <div class="icon">📍</div>
          <div>
            <p class="label">STORE</p>
            <p>
              Jl. Kemang Raya No. 10<br />
              Jakarta, Indonesia
            </p>
          </div>
        </div>

        <div class="group flex items-start gap-4">
          <div class="icon">⏱</div>
          <div>
            <p class="label">HOURS</p>
            <p>Mon – Sun, 10:00 – 22:00</p>
          </div>
        </div>

        <!-- SOCIAL -->
        <div class="space-y-3 pt-6">
          <p class="label">FOLLOW</p>
          <div class="flex gap-6 text-xs">
            <a href="#" class="hover:underline">Instagram</a>
            <a href="#" class="hover:underline">TikTok</a>
          </div>
        </div>

      </div>

      <!-- FORM -->
      <form @submit.prevent="sendToWhatsApp" class="space-y-12">

        <!-- INPUT -->
        <div class="group">
          <label class="label">NAME</label>
          <div class="input-wrapper">
            <input v-model="form.name" type="text" placeholder="Your name" class="input" />
            <div class="line-base"></div>
            <div class="line-active"></div>
          </div>
        </div>

        <div class="group">
          <label class="label">EMAIL</label>
          <div class="input-wrapper">
            <input v-model="form.email" type="email" placeholder="your@email.com" class="input" />
            <div class="line-base"></div>
            <div class="line-active"></div>
          </div>
        </div>

        <div class="group">
          <label class="label">MESSAGE</label>
          <div class="input-wrapper">
            <textarea v-model="form.message" rows="4" placeholder="Write your message..." class="input"></textarea>
            <div class="line-base"></div>
            <div class="line-active"></div>
          </div>
        </div>

        <!-- BUTTON -->
        <button
          type="submit"
          class="mt-6 px-12 py-4 text-xs tracking-[0.35em] border-b border-black
                 hover:bg-black hover:text-white transition-all duration-300"
        >
          SEND VIA WHATSAPP
        </button>

      </form>
    </div>
  </section>
</template>

<style scoped>
.icon {
  @apply w-8 h-8 flex items-center justify-center border rounded-full text-xs;
}

.label {
  @apply text-[10px] tracking-[0.3em] text-gray-400 mb-1 ;
}

.hover-text {
  @apply transition group-hover:text-black;
}

.input-wrapper {
  @apply relative mt-3 font-primary;
}

.input {
  @apply w-full bg-transparent py-3 border-none outline-none ring-0
         focus:outline-none focus:ring-0 border-b border-gray-300;
}

.line-base {
  @apply h-[1px] bg-gray-200 transition-opacity duration-300 group-focus-within:opacity-0;
}

.line-active {
  @apply absolute bottom-0 left-0 h-[1px] w-full bg-black
         scale-x-0 origin-left transition-transform duration-300
         group-focus-within:scale-x-100;
}
</style>