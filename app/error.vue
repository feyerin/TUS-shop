<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
  }
}>()
</script>

<template>
  <main class="min-h-screen flex items-center justify-center px-6 bg-white">
    <div class="text-center max-w-lg">
      <!-- CODE -->
      <p class="text-sm tracking-[0.3em] text-gray-400 mb-4">
        ERROR {{ error?.statusCode }}
      </p>

      <!-- TITLE -->
      <h1 class="text-5xl md:text-7xl font-light tracking-tight mb-6">
        {{ error?.statusMessage || 'Something went wrong' }}
      </h1>

      <!-- DESCRIPTION -->
      <p class="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
        The page you are looking for doesn’t exist or may have been moved.
      </p>

      <!-- ACTIONS -->
      <div class="flex items-center justify-center gap-4">
        <NuxtLink
          to="/"
          class="px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition"
        >
          BACK HOME
        </NuxtLink>

        <button
          class="px-8 py-3 border border-black text-sm tracking-widest hover:bg-black hover:text-white transition"
          @click="$router.back()"
        >
          GO BACK
        </button>
      </div>
    </div>
  </main>
</template>