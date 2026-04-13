<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  image: string
  reverse?: boolean
}>()
</script>

<template>
  <section class="py-28 px-6">
    <div
      :class="[
        'max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center',
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      ]"
    >

      <!-- IMAGE -->
      <div class="group overflow-hidden">
        <img
          :src="image"
          class="w-full h-[600px] object-cover transition duration-[4000ms] ease-out group-hover:scale-105"
        />
      </div>

      <!-- TEXT -->
      <div class="max-w-md">

        <!-- SUBTITLE -->
        <p
          v-if="subtitle"
          class="text-xs tracking-[0.3em] mb-4 text-gray-500"
        >
          {{ subtitle }}
        </p>

        <!-- TITLE -->
        <h2 class="font-secondary italic font-light text-5xl md:text-6xl leading-tight mb-6 text-[#292929]">
          {{ title }}
        </h2>

        <!-- CTA -->
        <button class="text-xs tracking-[0.25em] border-b border-black pb-1 hover:opacity-60 transition">
          DISCOVER
        </button>

      </div>

    </div>
  </section>
</template>