<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    price: number
    image: string
    soldOut?: boolean
    brand?: string
  }>(),
  {
    brand: "LOVE AND FLAIR"
  }
)

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <div class="group cursor-pointer">
    
    <!-- IMAGE -->
    <div class="relative mb-4 overflow-hidden bg-gray-100">
      
      <!-- SOLD OUT -->
      <div
        v-if="soldOut"
        class="absolute top-3 left-3 bg-black text-white text-[10px] tracking-widest px-3 py-1 z-10"
      >
        SOLD OUT
      </div>

      <NuxtImg
        :src="image"
        :alt="name"
        class="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
      />

      <!-- subtle overlay hover -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
    </div>

    <!-- INFO -->
    <div class="space-y-1">
      
      <p class="text-[11px] tracking-[0.2em] text-gray-400">
        {{ brand }}
      </p>

      <h3 class="text-sm leading-snug">
        {{ name }}
      </h3>

      <p class="text-sm text-gray-600">
        {{ formatPrice(price) }}
      </p>

    </div>

  </div>
</template>