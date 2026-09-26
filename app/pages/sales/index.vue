<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import type { Product } from '~/type/product'

useHead({
  title: 'Collections - Sales'
})

const route = useRoute()
const { getProducts } = useProductApi();

const slug = computed(() => route.params.slug as string)

const page = ref(1)
const limit = 12

const category = computed(() => slug.value)

const products = ref<Product[]>([])
const hasMore = ref(true)

const {
  data,
  pending: loading,
  error,
  refresh
} = await useAsyncData(
  'sale',
  async () => {
    const response = await getProducts({
      page: page.value,
      limit,
    })

    return response.data
  },
  {
    watch: [page, category]
  }
)

watch(
  data,
  (newData) => {
    if (!newData) return

    const newProducts = newData.products || []

    if (page.value === 1) {
      products.value = newProducts
    } else {
      products.value.push(...newProducts)
    }

    hasMore.value = newProducts.length >= limit
  },
  { immediate: true }
)

watch(category, async () => {
  page.value = 1
  products.value = []
  await refresh()
})

const loadMore = async () => {
  if (loading.value || !hasMore.value) return

  page.value++
}
</script>

<template>
  <section class="px-6 py-24 max-w-7xl mx-auto">
    <!-- TOP BAR -->
    <div class="flex items-center justify-between mb-8 text-sm">
      <button class="flex items-center gap-2 text-sm">
        <Icon
          name="heroicons:adjustments-horizontal"
          class="w-4 h-4 transition-transform duration-200"
        />
        Filter
      </button>

      <div class="flex items-center gap-6 text-gray-600">
        <span>{{ products.length }} Items</span>
      </div>
    </div>

    <!-- GRID -->
    <div
      v-if="products.length"
      class="grid grid-cols-2 md:grid-cols-4 gap-2"
    >
      <SectionsProductsCard
        v-for="p in products"
        :key="p.id"
        :name="p.name"
        :slug="p.slug"
        :price="p.finalPrice"
        :imageUrl="p.imageUrl"
        :brand="p.brandName"
        :soldOut="p.status === 'OUT_OF_STOCK'"
      />
    </div>

    <!-- EMPTY STATE -->
    <div
      v-else-if="!loading && !error"
      class="flex flex-col items-center justify-center py-20 md:py-28 text-center"
    >
      <Icon
        name="heroicons:shopping-bag"
        class="w-10 h-10 text-gray-300 mb-4"
      />

      <h3 class="text-base md:text-lg font-medium text-gray-900">
        No products found
      </h3>

      <p class="text-sm text-gray-500 mt-2">
        There are no products available in this category.
      </p>
    </div>

    <!-- LOAD MORE -->
    <div
      v-if="products.length && hasMore"
      class="flex justify-center mt-12"
    >
      <button
        :disabled="loading"
        class="px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 disabled:opacity-50 transition"
        @click="loadMore"
      >
        <span
          v-if="loading"
          class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin block"
        ></span>
        <span v-else>Load More</span>
      </button>
    </div>

    <!-- ERROR -->
    <div
      v-if="error"
      class="text-center text-red-500 mt-6"
    >
      Failed to load products
    </div>
  </section>
</template>