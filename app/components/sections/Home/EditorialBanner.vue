<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  image: string
}>()
</script>

<template>
  <section class="py-28 px-6">
    <div class="max-w-7xl mx-auto">

      <!-- WRAPPER -->
      <div class="relative group overflow-hidden">

        <!-- IMAGE -->
        <NuxtImg
          :src="image"
          class="w-full h-[600px] object-cover transition duration-[4000ms] ease-out group-hover:scale-105"
        />

        <!-- DARK OVERLAY -->
        <div class="absolute inset-0 bg-black/20"></div>

        <!-- CONTENT -->
        <div class="absolute inset-0 flex items-center justify-center md:justify-start md:pl-20">
          <div class="text-white max-w-lg">

            <!-- SUBTITLE -->
            <p
              v-if="subtitle"
              class="text-xs tracking-[0.3em] mb-4 opacity-80"
            >
              {{ subtitle }}
            </p>

            <!-- TITLE -->
            <h2 class="font-secondary italic font-light text-5xl md:text-6xl leading-tight mb-6">
              {{ title }}
            </h2>

            <!-- CTA -->
            <button class="border border-white px-8 py-3 text-xs tracking-[0.25em] hover:bg-white hover:text-black transition duration-300">
              DISCOVER
            </button>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>