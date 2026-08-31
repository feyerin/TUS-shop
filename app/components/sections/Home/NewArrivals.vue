<script setup lang="ts">
import { ref, watch } from "vue"
import type { Product } from "~/type/product"

const { getProducts, getProduct } = useProductApi()
const { currency } = useFormatter()

const slider = ref<HTMLElement | null>(null)

const products = ref<Product[]>([])
const selectedProduct = ref<Product | null>(null)

const selectedColor = ref<string | null>(null)
const selectedSize = ref("")

const loadingProduct = ref(false)

const page = ref(1)
const limit = 10
const sort = ref("-created_at")

const {
  data,
  pending: loadingProducts
} = await useAsyncData("new-products", async () => {
  const response = await getProducts({
    page: page.value,
    limit,
    orderBy: sort.value
  })

  return response.data
})

const scrollLeft = () => {
  slider.value?.scrollBy({
    left: -400,
    behavior: "smooth"
  })
}

const scrollRight = () => {
  slider.value?.scrollBy({
    left: 400,
    behavior: "smooth"
  })
}

const openQuickView = async (product: Product) => {
  try {
    loadingProduct.value = true

    const response = await getProduct(product.slug)

    selectedProduct.value = response.data.product

    selectedSize.value = ""
    selectedColor.value = null
  } catch (error) {
    console.error(error)
  } finally {
    loadingProduct.value = false
  }
}

const closeQuickView = () => {
  selectedProduct.value = null
}

watch(
  data,
  (newData) => {
    if (!newData) return

    products.value = newData.products || []
  },
  {
    immediate: true
  }
)
</script>

<template>
  <section class="py-16 md:py-24 px-4 md:px-6 max-w-8xl mx-auto">
    <!-- HEADER -->
    <div class="flex items-end justify-between mb-8 md:mb-12">
      <h2 class="text-[36px] md:text-[64px] leading-tight tracking-tight">
        New
        <span class="italic font-light font-secondary">
          Arrivals
        </span>
      </h2>

      <div class="flex items-center gap-4">
        <NuxtLink
          to="/new"
         class="text-xs tracking-widest hover:opacity-60">
          VIEW ALL
        </NuxtLink>

        <div class="flex gap-2">
          <button
            class="w-10 h-10 border hover:bg-black hover:text-white transition"
            @click="scrollLeft"
          >
            ←
          </button>

          <button
            class="w-10 h-10 border hover:bg-black hover:text-white transition"
            @click="scrollRight"
          >
            →
          </button>
        </div>
      </div>
    </div>

    <!-- SLIDER -->
    <div
      ref="slider"
      class="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="min-w-[260px] group cursor-pointer"
      >
        <div
          class="relative overflow-hidden"
          @click="openQuickView(product)"
        >
          <img
            :src="product.imageUrl"
            class="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div class="mt-3 text-sm">
          <p class="text-[11px] tracking-[0.2em] text-gray-400 uppercase">
            {{ product.brandName }}
          </p>

          <p class="mt-1">
            {{ product.name }}
          </p>

          <div class="flex items-center gap-2 mt-1">
            <!-- FINAL PRICE -->
            <p class="text-gray-700">
              {{
                currency(
                  product.finalPrice > 0
                    ? product.finalPrice
                    : product.basePrice
                )
              }}
            </p>

            <!-- BASE PRICE -->
            <p
              v-if="
                product.discountValue > 0 &&
                product.finalPrice > 0 &&
                product.finalPrice !== product.basePrice
              "
              class="text-xs text-gray-400 line-through"
            >
              {{ currency(product.basePrice) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- QUICK VIEW -->
    <transition name="slide">
      <div
        v-if="selectedProduct || loadingProduct"
        class="fixed inset-0 z-50 flex justify-end mt-12"
      >
        <!-- OVERLAY -->
        <div
          class="absolute inset-0 bg-black/30 backdrop-blur-sm"
          @click="closeQuickView"
        />

        <!-- DRAWER -->
        <div
          class="relative w-full md:w-[900px] bg-white h-full overflow-y-auto"
        >
          <!-- CLOSE -->
          <button
            class="absolute top-6 right-6 text-xl z-20"
            @click="closeQuickView"
          >
            ✕
          </button>

          <!-- LOADING -->
          <div
            v-if="loadingProduct"
            class="flex items-center justify-center h-full"
          >
            <div class="text-sm tracking-[0.2em] animate-pulse">
              LOADING PRODUCT...
            </div>
          </div>

          <!-- CONTENT -->
          <div
            v-else-if="selectedProduct"
            class="grid md:grid-cols-2 h-full"
          >
            <!-- LEFT -->
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <img
                  v-for="image in selectedProduct.coverImages.slice(0, 2)"
                  :key="image.id"
                  :src="image.imageUrl"
                  class="w-full h-[320px] object-cover"
                />
              </div>

              <div class="grid grid-cols-3 gap-4">
                <img
                  v-for="image in selectedProduct.coverImages.slice(2, 5)"
                  :key="image.id"
                  :src="image.imageUrl"
                  class="w-full h-[180px] object-cover hover:opacity-70 transition"
                />
              </div>
            </div>

            <!-- RIGHT -->
            <div class="p-8 flex flex-col">
              <!-- NAME -->
              <h2 class="text-3xl font-light mb-2">
                {{ selectedProduct.name }}
              </h2>

              <!-- PRICE -->
              <div class="flex items-center gap-3 my-4">
                <p class="text-xl text-gray-700 font-light">
                  {{
                    currency(
                      selectedProduct.finalPrice ||
                      selectedProduct.basePrice
                    )
                  }}
                </p>

                <p
                  v-if="
                    selectedProduct.discountValue > 0 &&
                    selectedProduct.basePrice !== selectedProduct.finalPrice
                  "
                  class="text-sm text-gray-400 line-through"
                >
                  {{ currency(selectedProduct.basePrice) }}
                </p>
              </div>

              <!-- BRAND -->
              <p class="text-xs tracking-[0.2em] uppercase mb-6 text-gray-500">
                {{ selectedProduct.brandName }}
              </p>

              <!-- DESCRIPTION -->
              <div class="pb-6 mb-6 border-b border-gray-200">
                <div
                  class="text-xs leading-6 text-gray-600 prose prose-sm max-w-none"
                  v-html="selectedProduct.description"
                />
              </div>

              <!-- SIZE -->
              <div
                v-if="selectedProduct.sizes?.length"
                class="mb-8"
              >
                <p class="text-sm mb-4">
                  Size
                </p>

                <div class="flex flex-wrap gap-4">
                  <button
                    v-for="size in selectedProduct.sizes"
                    :key="size"
                    class="px-1 py-1 text-sm transition border-b"
                    :class="
                      selectedSize === size
                        ? 'border-black'
                        : 'border-transparent hover:border-black'
                    "
                    @click="selectedSize = size"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>

              <!-- COLOR -->
              <div
                v-if="selectedProduct.colors?.length"
                class="mb-10 pb-6 border-b"
              >
                <p class="text-sm mb-4">
                  Color
                </p>

                <div class="flex items-center gap-4">
                  <button
                    v-for="color in selectedProduct.colors"
                    :key="color.colorHexCode"
                    class="w-6 h-6 rounded-full border transition"
                    :class="
                      selectedColor === color.colorHexCode
                        ? 'ring-1 ring-black ring-offset-2'
                        : 'hover:scale-110'
                    "
                    :style="{
                      backgroundColor: color.colorHexCode
                    }"
                    @click="selectedColor = color.colorHexCode"
                  />
                </div>

                <p
                  v-if="selectedColor"
                  class="text-xs text-gray-500 mt-4"
                >
                  {{
                    selectedProduct.colors.find(
                      color => color.colorHexCode === selectedColor
                    )?.color
                  }}
                </p>
              </div>

              <!-- CTA -->
              <div class="space-y-3">
                <a
                  v-for="link in selectedProduct.links"
                  :key="link.id"
                  :href="link.url"
                  target="_blank"
                  class="block w-full bg-black text-white py-4 text-sm tracking-[0.2em] text-center uppercase hover:opacity-80 transition"
                >
                  Buy
                </a>
              </div>
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