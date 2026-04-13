<script setup lang="ts">
defineProps<{
  title: string
  image: string
  subtitle?: string
  link?: string
}>()
</script>

<template>
  <NuxtLink
    :to="link || '#'"
    class="relative group cursor-pointer overflow-hidden block"
  >
    <!-- IMAGE -->
    <img
      :src="image"
      class="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
    />

    <!-- GRADIENT -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition"></div>

    <!-- CONTENT -->
    <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
      <p class="text-white/60 text-xs tracking-[0.3em] uppercase mb-2">
        Collection
      </p>

      <!-- SUBTITLE (optional) -->
      <p v-if="subtitle" class="text-white/80 text-sm mb-1">
        {{ subtitle }}
      </p>

      <h2 class="text-white text-2xl md:text-3xl tracking-wide mb-4">
        {{ title }}
      </h2>

      <!-- CTA -->
      <div class="flex items-center gap-2 text-white text-sm tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
        <span>SHOP NOW</span>
        <span class="text-lg">→</span>
      </div>
    </div>
  </NuxtLink>
</template>