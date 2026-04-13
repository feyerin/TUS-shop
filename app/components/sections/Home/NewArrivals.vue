<script setup lang="ts">
import { ref } from "vue"

const products = [
  {
    id: 1,
    name: "Pleated Skirt",
    price: "IDR 899.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-157_14b48dc6-2a4a-466f-bfa9-ddfd99a890ed.jpg?v=1772680575&width=1200"
  },
  {
    id: 2,
    name: "Minimal Dress",
    price: "IDR 1.299.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-153_14554004-320f-4e6b-af12-928f87e83607.jpg?v=1772680587&width=1200"
  },
  {
    id: 3,
    name: "Soft Blouse",
    price: "IDR 799.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-136_db99e3c7-06fc-4cf9-ad46-8538d7672f12.jpg?v=1772680545&width=1200"
  },
  {
    id: 4,
    name: "Wide Pants",
    price: "IDR 1.099.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-7_a7020aee-7eb2-473e-af8f-4ccd7730df21.jpg?v=1774410913&width=1200"
  }
]

const slider = ref<HTMLElement | null>(null)
const selectedProduct = ref<any>(null)
const qty = ref(1)
const selectedSize = ref("")

const scrollLeft = () => {
  slider.value?.scrollBy({ left: -400, behavior: "smooth" })
}

const scrollRight = () => {
  slider.value?.scrollBy({ left: 400, behavior: "smooth" })
}

const openQuickView = (product: any) => {
  selectedProduct.value = product
  qty.value = 1
  selectedSize.value = ""
}

const closeQuickView = () => {
  selectedProduct.value = null
}

const incQty = () => qty.value++
const decQty = () => {
  if (qty.value > 1) qty.value--
}
</script>

<template>
  <section class="py-16 md:py-24 px-4 md:px-6 max-w-8xl mx-auto">

    <!-- HEADER -->
    <div class="flex items-end justify-between mb-8 md:mb-12">
      <h2 class="text-[36px] md:text-[64px] leading-tight tracking-tight">
        New <span class="italic font-light">Arrivals</span>
      </h2>

      <div class="flex items-center gap-4">
        <button class="text-xs tracking-widest hover:opacity-60">
          VIEW ALL
        </button>

        <div class="flex gap-2">
          <button @click="scrollLeft" class="w-10 h-10 border hover:bg-black hover:text-white">←</button>
          <button @click="scrollRight" class="w-10 h-10 border hover:bg-black hover:text-white">→</button>
        </div>
      </div>
    </div>

    <!-- SLIDER -->
    <div
      ref="slider"
      class="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
    >
      <div
        v-for="p in products"
        :key="p.id"
        class="min-w-[260px] group cursor-pointer"
      >
        <div class="relative overflow-hidden">
          <NuxtImg
            :src="p.image"
            class="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
          />

          <!-- QUICK VIEW -->
          <button
            @click="openQuickView(p)"
            class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-5 py-2 opacity-0 group-hover:opacity-100 transition"
          >
            QUICK VIEW
          </button>
        </div>

        <div class="mt-3 text-sm">
          <p>{{ p.name }}</p>
          <p class="text-gray-500">{{ p.price }}</p>
        </div>
      </div>
    </div>

    <!-- QUICK VIEW DRAWER -->
    <transition name="slide">
      <div
        v-if="selectedProduct"
        class="fixed inset-0 z-50 flex justify-end"
      >
        <!-- overlay -->
        <div
          class="absolute inset-0 bg-black/30 backdrop-blur-sm"
          @click="closeQuickView"
        />

        <!-- drawer -->
        <div class="relative w-full md:w-[900px] bg-white h-full overflow-y-auto">
          
          <!-- CLOSE -->
          <button
            class="absolute top-6 right-6 text-xl"
            @click="closeQuickView"
          >
            ✕
          </button>

          <div class="grid md:grid-cols-2 h-full">

            <!-- LEFT IMAGES -->
            <div class="p-6 grid grid-cols-2 gap-4">
              <NuxtImg
                :src="selectedProduct.image"
                class="col-span-2 w-full h-[420px] object-cover"
              />
              <NuxtImg
                v-for="i in 3"
                :key="i"
                :src="selectedProduct.image"
                class="w-full h-[140px] object-cover hover:opacity-70 cursor-pointer"
              />
            </div>

            <!-- RIGHT INFO -->
            <div class="p-8 flex flex-col">
              <h2 class="text-2xl font-light mb-2">
                {{ selectedProduct.name }}
              </h2>

              <p class="text-lg text-gray-600 mb-6">
                {{ selectedProduct.price }}
              </p>

              <!-- SIZE -->
              <div class="mb-6">
                <p class="text-sm mb-2">Size</p>
                <div class="flex gap-3">
                  <button
                    v-for="s in ['XS','S','M','L']"
                    :key="s"
                    @click="selectedSize = s"
                    :class="[
                      'border px-3 py-1 text-sm transition',
                      selectedSize === s
                        ? 'bg-black text-white'
                        : 'hover:bg-black hover:text-white'
                    ]"
                  >
                    {{ s }}
                  </button>
                </div>
              </div>

              <!-- QTY -->
              <div class="flex items-center border w-[140px] mb-6">
                <button @click="decQty" class="px-4 py-2">-</button>
                <div class="flex-1 text-center">{{ qty }}</div>
                <button @click="incQty" class="px-4 py-2">+</button>
              </div>

              <!-- CTA -->
              <button class="bg-black text-white py-4 text-sm tracking-widest hover:opacity-80">
                ADD TO CART
              </button>

              <!-- STOCK -->
              <p class="mt-6 text-sm text-gray-500">
                5 IN STOCK
              </p>
            </div>

          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* SLIDE ANIMATION */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>