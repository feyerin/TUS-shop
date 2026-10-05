<script setup lang="ts">
const { getContact } = useBusinessContact()

await callOnce('business-contact', async () => {
  await getContact()
})

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
    <Suspense>
      <template #default>
        <NuxtPage />
      </template>

      <template #fallback>
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur"
        >
          <div class="flex flex-col items-center">
            <img
              src="/image/logo/tus.PNG"
              alt="The Underwear Supply"
              class="w-[160px] animate-pulse object-contain sm:w-[190px]"
            />

            <div class="mt-5 h-[2px] w-16 overflow-hidden bg-gray-200">
              <div class="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] bg-[#171717]" />
            </div>
          </div>
        </div>
      </template>
    </Suspense>

    <!-- Floating WhatsApp tidak masuk Suspense -->
    <UiFloatingWhatsapp />
  </NuxtLayout>
</template>
