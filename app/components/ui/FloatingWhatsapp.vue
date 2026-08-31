<script setup lang="ts">
const { contact } = useBusinessContact()

const whatsappUrl = computed(() => {
  const phone = contact.value?.data?.phone_number

  if (!phone) return '#'

  const message = encodeURIComponent(
    'Hello, I would like to know more about your products.'
  )

  // Bersihkan nomor dari +, spasi, -, dll.
  const cleanPhone = phone.replace(/\D/g, '')

  return `https://wa.me/${cleanPhone}?text=${message}`
})
</script>

<template>
  <a
    v-if="contact?.data?.phone_number"
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    class="group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center transition-all duration-300"
  >
    <img
      src="/image/logo/whatsapp.webp"
      alt="WhatsApp"
      class="h-16 w-16 object-contain"
    />

    <span
      class="pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-[#151515] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100"
    >
      Chat with us
    </span>
  </a>
</template>
