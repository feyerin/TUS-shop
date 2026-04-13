<script setup lang="ts">
import { useParallax } from "@/composables/useParallax"

const p1 = useParallax(0.4, 0.12)
const p2 = useParallax(0.8, 0.08)
const p3 = useParallax(0.6, 0.1)

const products = [
  {
    id: 1,
    name: "Linen Dress",
    price: "IDR 899.000",
    image: "https://www.masarishop.com/media/.renditions/wysiwyg/Editorial/trendstotry-the-90-codes/250912_trends_to_try_rhythm_of_depth_editorial.jpg"
  },
  {
    id: 2,
    name: "Oversized Blazer",
    price: "IDR 1.299.000",
    image: "https://www.masarishop.com/media/.renditions/wysiwyg/Editorial/kinetic-ambition/260219_lookbook_kinetic_ambition_editorial.jpg"
  },
  {
    id: 3,
    name: "Silk Shirt",
    price: "IDR 799.000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  }
]
</script>

<template>
  <section class="py-40 px-6">
    <div class="max-w-7xl mx-auto grid md:grid-cols-6 gap-8">

      <!-- BIG IMAGE -->
      <div ref="p1.el" class="md:col-span-3 overflow-hidden h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          class="w-full h-[120%] object-cover will-change-transform"
          :style="{
            transform: `translateY(${p1.offset}px) scale(${p1.scale})`
          }"
          loading="eager"
        />
      </div>

      <!-- TOP RIGHT -->
      <div class="md:col-span-2 md:translate-y-20 group cursor-pointer">
        <div ref="p2.el" class="overflow-hidden h-[420px]">
          <img
            :src="products[0]?.image"
            class="w-full h-[120%] object-cover will-change-transform transition duration-500 group-hover:scale-105"
            :style="{
              transform: `translateY(${p2.offset}px) scale(${p2.scale})`
            }"
          />
        </div>

        <h3 class="mt-4 text-sm tracking-wide">
          {{ products[0]?.name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ products[0]?.price }}
        </p>
      </div>

      <!-- TEXT -->
      <div class="md:col-span-1 flex items-center">
        <div>
          <h2 class="font-secondary italic text-3xl mb-4">
            Quiet Luxury
          </h2>
          <p class="text-xs text-gray-500">
            Timeless silhouettes designed for everyday elegance.
          </p>
        </div>
      </div>

      <!-- BOTTOM LEFT -->
      <div class="md:col-span-2 md:-translate-y-16 group cursor-pointer">
        <div ref="p3.el" class="overflow-hidden h-[350px]">
          <img
            :src="products[1]?.image"
            class="w-full h-[120%] object-cover will-change-transform transition duration-500 group-hover:scale-105"
            :style="{
              transform: `translateY(${p3.offset}px) scale(${p3.scale})`
            }"
          />
        </div>

        <h3 class="mt-4 text-sm tracking-wide">
          {{ products[1]?.name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ products[1]?.price }}
        </p>
      </div>

      <!-- CENTER STATIC -->
      <div class="md:col-span-2 group overflow-hidden">
        <img
          src="https://loveandflair.com/cdn/shop/files/Screenshot_2026-03-30_at_10.13.30.png"
          class="w-full h-[500px] object-cover transition duration-[4000ms] group-hover:scale-105"
        />
      </div>

      <!-- BOTTOM RIGHT -->
      <div class="md:col-span-2 md:translate-y-10 group cursor-pointer">
        <img
          :src="products[2]?.image"
          class="w-full h-[350px] object-cover mb-4 transition duration-700 group-hover:scale-105"
        />
        <h3 class="text-sm tracking-wide">
          {{ products[2]?.name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ products[2]?.price }}
        </p>
      </div>

    </div>
  </section>
</template>