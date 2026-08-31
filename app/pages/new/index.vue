<script setup lang="ts">
import { ref, watch } from 'vue'

import type { Product } from '~/type/product'

useHead({
  title: `Collections - New In`
})

const { getProducts } = useProductApi()

const page = ref(1)
const limit = 12
const maxItems = 30

// default newest
const sort = ref('-created_at')

const sortOptions = [
  {
    label: 'Newest',
    value: '-created_at'
  },
  {
    label: 'Oldest',
    value: 'created_at'
  }
]

const products = ref<Product[]>([])
const hasMore = ref(true)

const {
  data,
  pending: loading,
  error,
  refresh
} = await useAsyncData(
  'new',
  async () => {
    const response = await getProducts({
      page: page.value,
      limit,
      orderBy: sort.value
    })

    return response.data
  },
  {
    watch: [page, sort]
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

    // max 30 items
    if (products.value.length >= maxItems) {
      products.value = products.value.slice(0, maxItems)
      hasMore.value = false
      return
    }

    hasMore.value = newProducts.length >= limit
  },
  { immediate: true }
)

watch(sort, async () => {
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

      <div class="flex items-center gap-6">
        <!-- SORT -->
        <div class="relative">
          <div class="flex items-center gap-1 text-sm">
            <span class="text-gray-500">
              Order by:
            </span>

            <select
              v-model="sort"
              class="appearance-none bg-transparent pr-5 cursor-pointer outline-none"
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
              class="w-4 h-4 pointer-events-none"
            />
          </div>
        </div>

        <!-- TOTAL -->
        <span class="text-gray-600">
          {{ products.length }} Items
        </span>
      </div>
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
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

    <!-- LOAD MORE -->
    <div class="flex justify-center mt-12">
      <button
        v-if="hasMore"
        :disabled="loading"
        class="px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 disabled:opacity-50 transition flex items-center justify-center min-w-[140px]"
        @click="loadMore"
      >
        <span
          v-if="loading"
          class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin block"
        />

        <span v-else>
          Load More
        </span>
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