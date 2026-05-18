<script setup lang="ts">
import { ref } from "vue"
import { products } from "../../../../data/products"

const { currency } = useFormatter();

const slider = ref<HTMLElement | null>(null)
const selectedProduct = ref<any>(null)
const qty = ref(1)
const selectedSize = ref("")
const selectedColor = ref<string | null>(null)

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
</script>

<template>
  <section class="py-16 md:py-24 px-4 md:px-6 max-w-8xl mx-auto">

    <!-- HEADER -->
    <div class="flex items-end justify-between mb-8 md:mb-12">
      <h2 class="text-[36px] md:text-[64px] leading-tight tracking-tight">
        New <span class="italic font-light font-secondary">Arrivals</span>
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
        <div
          @click="openQuickView(p)"
          class="relative overflow-hidden"
          >
          <img
            :src="p.imageUrl"
            class="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div class="mt-3 text-sm">
          <p class="text-[11px] tracking-[0.2em] text-gray-400">
            {{ "THE UNDERWEAR SUPPLY" }}
          </p>
          <p class="mt-1">{{ p.name }}</p>
          <p class="text-gray-500">{{ currency(p.price) }}</p>
        </div>
      </div>
    </div>

    <!-- QUICK VIEW DRAWER -->
    <transition name="slide">
      <div
        v-if="selectedProduct"
        class="fixed inset-0 z-50 flex justify-end mt-12"
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
            class="absolute top-6 right-6 text-xl z-20"
            @click="closeQuickView"
          >
            ✕
          </button>

          <div class="grid md:grid-cols-2 h-full">

            <!-- LEFT IMAGES -->
            <div class="p-6 space-y-4">

              <!-- TOP 2 -->
              <div class="grid grid-cols-2 gap-4">
                <img
                  :src="selectedProduct.image"
                  class="w-full h-[320px] object-cover"
                />

                <img
                  :src="selectedProduct.image"
                  class="w-full h-[320px] object-cover"
                />
              </div>

              <!-- BOTTOM 3 -->
              <div class="grid grid-cols-3 gap-4">
                <img
                  v-for="i in 3"
                  :key="i"
                  :src="selectedProduct.image"
                  class="w-full h-[180px] object-cover hover:opacity-70 cursor-pointer transition"
                />
              </div>

            </div>

            <!-- RIGHT INFO -->
            <div class="p-8 flex flex-col font-primary">

              <!-- BRAND -->
              <h2 class="text-3xl font-light mb-2">
                {{ selectedProduct.name }}
              </h2>

              <!-- PRICE -->
              <p class="text-xl text-gray-700 my-4 font-light">
                {{ currency(selectedProduct.price) }}
              </p>

              <p class="my-4 text-xs font-thin tracking-[0.2em]">
                LOVE AND FLAIR
              </p>

              <!-- DESCRIPTION -->
              <div class="pb-6 mb-6 border-b border-gray-200">
                <p class="text-xs font-thin leading-6 text-gray-600">
                  THALUNE TROUSERS The Thalune Trousers exude modern refinement with
                  their impeccably tailored silhouette and structure...
                </p>
              </div>

              <!-- SIZE -->
              <div class="mb-8">
                <p class="text-sm mb-4">
                  Size
                </p>

                <div class="flex gap-4 font-thin">
                  <button
                    v-for="s in ['XS','S','M','L']"
                    :key="s"
                    @click="selectedSize = s"
                    :class="[
                      'px-1 py-1 text-sm transition border-b',
                      selectedSize === s
                        ? 'border-black'
                        : 'border-transparent hover:border-black'
                    ]"
                  >
                    {{ s }}
                  </button>
                </div>
              </div>

              <!-- COLOR -->
              <div class="mb-10 pb-6 border-b">
                <p class="text-sm mb-4">
                  Color
                </p>

                <div class="flex items-center gap-4">
                  <button
                    v-for="color in [
                      '#000000',
                      '#FFFFFF',
                      '#D4B996',
                      '#8B5E3C',
                      '#C0392B'
                    ]"
                    :key="color"
                    @click="selectedColor = color"
                    class="w-6 h-6 rounded-full border transition"
                    :class="
                      selectedColor === color
                        ? 'ring-1 ring-black ring-offset-2'
                        : 'hover:scale-110'
                    "
                    :style="{
                      backgroundColor: color
                    }"
                  />
                </div>
              </div>

              <!-- CTA -->
              <button
                class="bg-black text-white py-4 text-sm tracking-[0.2em] hover:opacity-80 transition"
              >
                BUY
              </button>

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