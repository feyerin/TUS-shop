<script setup lang="ts">
const { getContact } = useBusinessContact()

await callOnce('business-contact', async () => {
  await getContact()
})

const { isLoading } = useLoadingIndicator()

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Cormorant+Upright:wght@300;400;500;600;700&display=swap',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />

    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur"
    >
      <div class="flex flex-col items-center">
        <img
          src="/image/logo/tus.PNG"
          alt="The Underwear Supply"
          class="w-[160px] animate-pulse object-contain sm:w-[190px]"
        />

        <div class="mt-5 h-[3px] w-16 overflow-hidden rounded-full bg-gray-200">
          <div class="loading-progress h-full rounded-full bg-[#171717]" />
        </div>
      </div>
    </div>

    <UiFloatingWhatsapp />
  </NuxtLayout>
</template>

<style scoped>
.loading-progress {
  width: 40%;
  animation: loading-progress 1.2s ease-in-out infinite;
}

@keyframes loading-progress {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(250%);
  }
}
</style>