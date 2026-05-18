<script setup lang="ts">
import { ref, computed, watchEffect } from "vue"
import { useRoute } from "vue-router"
import { products } from "../../../data/products"
import { useProductApi } from "~/composables/useProductApi"

const route = useRoute()
const slug = route.params.slug as string

const { data: response, pending } = await useAsyncData(`product-${slug}`, () => useProductApi().getProduct(slug))

const product = computed(() => response.value?.data?.product)

const decodedDescription = computed(() => {
  let desc = product.value?.description || 'No description available.'
  return desc
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
})

const colors = computed(() => {
  if (product.value?.colors && product.value.colors.length > 0) {
    return product.value.colors
  }
  const options = response.value?.data?.colorsOption
  if (options) {
    return Object.values(options).map((opt: any) => ({
      color: opt.color,
      colorHexCode: opt.colorHexCode || opt.color
    }))
  }
  return []
})

const imagesUrl = computed(() => {
  if (!product.value) return []
  return (product.value.coverImages || [])
    .sort((a, b) => a.order - b.order)
    .map(img => img.imageUrl)
})

const activeImage = ref('')
watchEffect(() => {
  if (imagesUrl.value.length && !activeImage.value) {
    activeImage.value = imagesUrl.value[0]
  }
})

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
  <section class="max-w-7xl mx-auto px-6 py-16 mt-6">

    <!-- BREADCRUMB -->
    <UiBreadcrumb class="mb-8" />

    <div v-if="pending" class="text-center py-20">Loading...</div>
    <div v-else-if="!product" class="text-center py-20">Product not found.</div>
    <div v-else class="grid md:grid-cols-[60%_40%] gap-16">

      <!-- LEFT -->
      <div class="space-y-3">

        <!-- TOP 2 IMAGES -->
        <div class="grid grid-cols-2 gap-3" v-if="imagesUrl.length > 0">
          <img
            v-for="(img, i) in imagesUrl.slice(0, 2)"
            :key="i"
            :src="img"
            @click="activeImage = img"
            class="w-full h-full object-cover cursor-pointer transition"
            :class="{
              'opacity-100': activeImage === img,
              'opacity-70 hover:opacity-100': activeImage !== img
            }"
          />
        </div>

        <!-- BOTTOM IMAGES -->
        <div class="grid grid-cols-3 gap-3" v-if="imagesUrl.length > 2">
          <img
            v-for="(img, i) in imagesUrl.slice(2)"
            :key="i"
            :src="img"
            @click="activeImage = img"
            class="w-full h-full object-cover cursor-pointer transition"
            :class="{
              'opacity-100': activeImage === img,
              'opacity-70 hover:opacity-100': activeImage !== img
            }"
          />
        </div>

      </div>

      <!-- RIGHT -->
      <div class="space-y-10">

        <!-- INFO -->
        <div>
          <h1 class="text-[40px] font-normal font-primary leading-snug tracking-tighter">
            {{ product.name }}
          </h1>

          <p class="text-xs text-gray-400 my-6 uppercase">
            {{ product.brandName }}
          </p>

          <div class="mt-4 flex items-center gap-3 text-[20px]">
            <span v-if="product.discountValue > 0" class="line-through text-gray-400 text-base">
              {{ formatPrice(product.basePrice) }}
            </span>
            <span>{{ formatPrice(product.finalPrice) }}</span>
          </div>
        </div>

        <!-- SIZE -->
        <div>
          <p class="text-sm mb-2">Size</p>
          <div class="flex gap-2 flex-wrap" v-if="product.sizes && product.sizes.length">
            <div
              v-for="size in product.sizes"
              :key="size"
              class="border px-4 py-2 inline-block text-sm uppercase"
            >
              {{ size }}
            </div>
          </div>
          <div v-else class="border px-4 py-2 inline-block text-sm">
            ONE SIZE
          </div>
        </div>

        <!-- COLOR -->
        <div>
          <p class="text-sm mb-2">Color</p>
          <div class="flex gap-2 flex-wrap" v-if="colors.length">
            <div
              v-for="color in colors"
              :key="color.color"
              class="w-6 h-6 border rounded-full"
              :style="{ backgroundColor: color.colorHexCode }"
              :title="color.color"
            ></div>
          </div>
          <div v-else class="w-6 h-6 border rounded-full bg-gray-200"></div>
        </div>

        <!-- QTY -->
        <div class="flex items-center gap-4">

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
                class="pb-4 text-sm text-gray-600 prose prose-sm"
                v-html="decodedDescription"
              >
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
        <h2 class="text-[64px] font-light">
          You May Also <span class="font-secondary italic">Like</span>
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