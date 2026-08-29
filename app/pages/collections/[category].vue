<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useProductApi } from "~/composables/useProductApi";
import type { Product } from "~/type/product";

const route = useRoute();
const category = route.params.category as string;

const { getProducts } = useProductApi();

const products = ref<Product[]>([]);
const sort = ref("Featured");
const page = ref(1);
const loading = ref(false);
const hasMore = ref(true);

const sortOptions = [
  { label: "Featured", value: "Featured" },
  { label: "Price: Low to High", value: "low" },
  { label: "Price: High to Low", value: "high" },
];

const { data } = await useAsyncData(`products-${category}`, () =>
  getProducts({ page: page.value, limit: 12, categories: category })
);

if (data.value) {
  products.value = data.value.data.products || [];
  if (
    page.value >= data.value.pagination.totalPages ||
    products.value.length === 0
  ) {
    hasMore.value = false;
  }
}

const loadMore = async () => {
  if (loading.value || !hasMore.value) return;
  loading.value = true;
  page.value++;

  try {
    const response = await getProducts({
      page: page.value,
      limit: 12,
      categories: category,
    });

    const newProducts = response.data.products || [];
    products.value.push(...newProducts);

    if (
      page.value >= response.pagination.totalPages ||
      newProducts.length === 0
    ) {
      hasMore.value = false;
    }
  } catch (error) {
    console.error("Failed to load more products:", error);
    page.value--; // Revert page on error
  } finally {
    loading.value = false;
  }
};

useHead({
  title: `Collections - ${category}`
})
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
        <UiDropdown v-model="sort" :options="sortOptions" label="Sort By" />

        <span>{{ products.length }} Items</span>
      </div>
    </div>

    <!-- GRID -->
    <div v-if="products.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
    <div v-if="hasMore" class="flex justify-center">
      <button
        @click="loadMore"
        :disabled="loading"
        class="px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 disabled:opacity-50 transition"
      >
        {{ loading ? "LOADING..." : "LOAD MORE" }}
      </button>
    </div>
  </section>
</template>
