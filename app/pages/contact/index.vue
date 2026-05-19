<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useContactApi } from '~/composables/useContactApi'
import { useSocialMediaApi } from '~/composables/useSocialMediaApi'
import type { ContactData } from '~/type/contact'
import type { SocialMediaData } from '~/type/socialMedia'

// FORM
const form = reactive({
  name: '',
  message: ''
})

// API
const { getContact } = useContactApi()
const { getSocialMedia } = useSocialMediaApi()

const contact = ref<ContactData | null>(null)
const social = ref<SocialMediaData | null>(null)

const loading = ref(false)

const fetchData = async () => {
  loading.value = true

  try {
    const [contactRes, socialRes] = await Promise.all([
      getContact(),
      getSocialMedia()
    ])

    contact.value = contactRes.data
    social.value = socialRes.data
  } catch (err) {
    console.error('Failed fetch contact/social', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})

// WHATSAPP
const sendToWhatsApp = () => {
  if (!form.name || !form.message) {
    alert('Please fill all fields')
    return
  }

  const phone = contact.value?.phone_number || '6281234567890'

  const text = `Hello, I would like to contact you.

Name: ${form.name}

Message:
${form.message}`

  const encoded = encodeURIComponent(text)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank')

  Object.assign(form, {
    name: '',
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

        <!-- EMAIL -->
        <div class="flex items-start gap-4">
          <div class="icon">@</div>
          <div>
            <p class="label">EMAIL</p>
            <p>{{ contact?.email }}</p>
          </div>
        </div>

        <!-- PHONE -->
        <div class="flex items-start gap-4">
          <div class="icon">☎</div>
          <div>
            <p class="label">PHONE</p>
            <p>{{ contact?.phone_number }}</p>
          </div>
        </div>

        <!-- STORE -->
        <div class="flex items-start gap-4">
          <div class="icon">📍</div>
          <div>
            <p class="label">STORE</p>
            <p>{{ contact?.store }}</p>
          </div>
        </div>

        <!-- HOURS -->
        <div class="flex items-start gap-4">
          <div class="icon">⏱</div>
          <div>
            <p class="label">HOURS</p>
            <p>{{ contact?.hours }}</p>
          </div>
        </div>

        <!-- SOCIAL -->
        <div class="space-y-3 pt-6">
          <p class="label">FOLLOW</p>

          <div class="flex gap-6 text-xs">
            <a
              v-if="social?.instagram"
              :href="social.instagram"
              target="_blank"
              class="hover:underline"
            >
              Instagram
            </a>

            <a
              v-if="social?.tiktok"
              :href="social.tiktok"
              target="_blank"
              class="hover:underline"
            >
              TikTok
            </a>

            <a
              v-if="social?.facebook"
              :href="social.facebook"
              target="_blank"
              class="hover:underline"
            >
              Facebook
            </a>
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