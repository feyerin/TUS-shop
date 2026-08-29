<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    slug: string
    price: number
    imageUrl: string
    soldOut?: boolean
    brand?: string
  }>(),
  {
    brand: 'THE UNDERWEAR SUPPLY'
  }
)

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <NuxtLink :to="`/products/${slug}`">
    <div class="group cursor-pointer">
      <!-- IMAGE -->
      <div class="relative overflow-hidden bg-gray-100 mb-3 md:mb-4">
        <!-- SOLD OUT -->
        <div
          v-if="soldOut"
          class="absolute top-2 left-2 md:top-3 md:left-3 z-10 bg-black text-white text-[9px] md:text-[10px] tracking-[0.2em] px-2 py-1 md:px-3"
        >
          SOLD OUT
        </div>

        <img
          :src="imageUrl"
          :alt="name"
          class="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-105"
        />

        <!-- HOVER -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
      </div>

      <!-- INFO -->
      <div class="space-y-0.5 md:space-y-1 px-0.5">
        <p class="text-[9px] md:text-[11px] tracking-[0.18em] text-gray-400 uppercase truncate">
          {{ brand }}
        </p>

        <h3 class="text-xs md:text-sm leading-snug line-clamp-2 min-h-[34px] md:min-h-[40px]">
          {{ name }}
        </h3>

        <p v-if="price" class="text-xs md:text-sm text-gray-700">
          {{ formatPrice(price) }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>