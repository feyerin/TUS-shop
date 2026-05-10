// app.vue
<script setup lang="ts">
  useHead({
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: ""
      },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Cormorant+Upright:wght@300;400;500;600;700&display=swap"
      }
    ]
  })
</script>

<template>
  <NuxtLayout>
    <Suspense>
      <!-- Page -->
      <template #default>
        <NuxtPage />
      </template>

      <!-- Loader -->
      <template #fallback>
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur">
          <div class="flex flex-col items-center gap-3">
            <div class="animate-spin h-10 w-10 border-4 border-gray-300 border-t-black rounded-full"></div>
            <p class="text-sm">Loading...</p>
          </div>
        </div>
      </template>
    </Suspense>
  </NuxtLayout>
</template>