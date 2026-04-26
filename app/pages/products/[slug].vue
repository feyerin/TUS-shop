<script setup lang="ts">
import { ref } from "vue"
import { products } from "../../../data/products"

const product = {
  name: "Jire Translucent Trousers In Ivory",
  brand: "THE UNDERWEAR SUPPLY",
  price: 699000,
  stock: 60,
  images: [
    "https://loveandflair.com/cdn/shop/files/LF-182_1ae6d18f-cf3f-4be0-8e7f-15e06c3c9143.jpg",
    "https://loveandflair.com/cdn/shop/files/LF-153_14554004-320f-4e6b-af12-928f87e83607.jpg",
    "https://loveandflair.com/cdn/shop/files/LF-67_317a9282-74e2-453b-bb5b-02c5f28bf967.jpg",
    "https://loveandflair.com/cdn/shop/files/LF-74_96046373-84c5-4dff-85d3-3102c380cfab.jpg"
  ]
}

const activeImage = ref(product.images[0])
const qty = ref(1)
const activeAccordion = ref<string | null>(null)

const toggle = (key: string) => {
  activeAccordion.value =
    activeAccordion.value === key ? null : key
}

const formatPrice = (p: number) =>
  "IDR " + p.toLocaleString("id-ID")
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16">

    <!-- BREADCRUMB -->
    <UiBreadcrumb class="mb-8" />

    <div class="grid md:grid-cols-2 gap-16">

      <!-- LEFT -->
      <div>
        <!-- MAIN IMAGE -->
        <img
          :src="activeImage"
          class="w-full object-cover mb-3 transition"
        />

        <!-- THUMBNAILS -->
        <div class="grid grid-cols-4 gap-2">
          <img
            v-for="(img, i) in product.images"
            :key="i"
            :src="img"
            @click="activeImage = img"
            class="cursor-pointer border"
            :class="{
              'border-black': activeImage === img,
              'opacity-60 hover:opacity-100': activeImage !== img
            }"
          />
        </div>
      </div>

      <!-- RIGHT -->
      <div class="space-y-8">

        <!-- INFO -->
        <div>
          <h1 class="text-2xl font-medium leading-snug">
            {{ product.name }}
          </h1>

          <p class="text-xs text-gray-400 mt-1">
            {{ product.brand }}
          </p>

          <p class="mt-4 text-lg font-medium">
            {{ formatPrice(product.price) }}
          </p>

          <div class="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Icon name="heroicons:check-circle" class="w-4 h-4" />
            <span>{{ product.stock }} IN STOCK</span>
          </div>
        </div>

        <!-- SIZE -->
        <div>
          <p class="text-sm mb-2">Size</p>
          <div class="border px-4 py-2 inline-block text-sm">
            ONE SIZE
          </div>
        </div>

        <!-- COLOR -->
        <div>
          <p class="text-sm mb-2">Color</p>
          <div class="w-6 h-6 border rounded-full"></div>
        </div>

        <!-- QTY -->
        <div class="flex items-center gap-4">

          <div class="flex border">
            <button
              class="px-3 disabled:opacity-30"
              :disabled="qty === 1"
              @click="qty--"
            >
              -
            </button>

            <span class="px-4 flex items-center">
              {{ qty }}
            </span>

            <button
              class="px-3"
              @click="qty++"
            >
              +
            </button>
          </div>

          <button class="flex-1 bg-black text-white py-3 text-sm hover:opacity-90 transition">
            ADD TO CART
          </button>
        </div>

        <!-- ACCORDION -->
        <div class="border-t divide-y">

          <!-- ITEM -->
          <div>
            <button
              @click="toggle('desc')"
              class="w-full flex justify-between items-center py-4 text-sm"
            >
              <span>Description</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeAccordion === 'desc' }"
              />
            </button>

            <transition name="accordion">
              <div
                v-show="activeAccordion === 'desc'"
                class="pb-4 text-sm text-gray-600"
              >
                Lightweight translucent trousers with flowy silhouette.
              </div>
            </transition>
          </div>

          <!-- ITEM -->
          <div>
            <button
              @click="toggle('shipping')"
              class="w-full flex justify-between items-center py-4 text-sm"
            >
              <span>Shipping</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': activeAccordion === 'shipping' }"
              />
            </button>

            <transition name="accordion">
              <div
                v-show="activeAccordion === 'shipping'"
                class="pb-4 text-sm text-gray-600"
              >
                Ships within 2–4 working days.
              </div>
            </transition>
          </div>

        </div>

      </div>
    </div>

    <!-- RELATED -->
    <div class="mt-24">
      <div class="flex justify-between items-end mb-8">
        <h2 class="text-3xl font-light">
          You May Also <i>Like</i>
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <SectionsProductsCard
          v-for="p in products"
          :key="p.id"
          v-bind="p"
        />
      </div>
    </div>

  </section>
</template>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>