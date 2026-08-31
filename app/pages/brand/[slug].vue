<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useBrandApi } from '~/composables/useBrandApi'
import type { Product } from '~/type/product'

const route = useRoute()
const { getProductByBrands } = useBrandApi()

const slug = computed(() => route.params.slug as string)
const category = computed(() => slug.value)

const page = ref(1)
const limit = 12

const sort = ref('-created_at')

const sortOptions = [
  { label: 'Newest', value: '-created_at' },
  { label: 'Oldest', value: 'created_at' },
]

const products = ref<Product[]>([])
const hasMore = ref(true)

const {
  data,
  pending: loading,
  error,
  refresh
} = await useAsyncData(
  'brand-products',
  async () => {
    const response = await getProductByBrands({
      page: page.value,
      limit,
      brands: category.value,
      orderBy: sort.value
    })

    return response.data
  },
  {
    watch: [page, category, sort]
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

watch([category, sort], async () => {
  page.value = 1
  products.value = []
  await refresh()
})

const loadMore = () => {
  if (loading.value || !hasMore.value) return
  page.value++
}

useHead({
  title: `Brand - ${category.value}`
})
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
    <!-- TOP BAR -->
    <div class="flex items-center justify-between gap-4 mb-6 md:mb-8">
      <button class="flex items-center gap-2 text-sm">
        <Icon
          name="heroicons:adjustments-horizontal"
          class="w-4 h-4"
        />
        <span>Filter</span>
      </button>

      <div class="flex items-center gap-4 md:gap-6">
        <!-- SORT -->
        <div class="relative">
          <select
            v-model="sort"
            class="appearance-none bg-transparent pr-5 text-sm outline-none cursor-pointer"
          >
            <option
              v-for="item in sortOptions"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </option>
          </select>

          <Icon
            name="heroicons:chevron-down"
            class="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>

        <!-- TOTAL -->
        <span class="text-xs md:text-sm text-gray-500 whitespace-nowrap">
          {{ products.length }} Items
        </span>
      </div>
    </div>

    <!-- GRID -->
    <div
      v-if="products.length > 0"
      class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
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
      v-else-if="!loading"
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
      v-if="hasMore"
      class="flex justify-center mt-10 md:mt-14"
    >
      <button
        :disabled="loading"
        class="min-w-[140px] h-11 px-8 bg-black text-white text-xs md:text-sm tracking-[0.2em] hover:bg-gray-800 transition disabled:opacity-50 flex items-center justify-center"
        @click="loadMore"
      >
        <span
          v-if="loading"
          class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
        />

        <span v-else>
          LOAD MORE
        </span>
      </button>
    </div>

    <!-- ERROR -->
    <div
      v-if="error"
      class="text-center text-red-500 text-sm mt-6"
    >
      Failed to load products
    </div>
  </section>
</template>