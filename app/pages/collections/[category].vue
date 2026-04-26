<script setup lang="ts">
import { ref } from "vue"
import { products } from "../../../data/products"

const sort = ref("Featured")

const sortOptions = [
  { label: "Featured", value: "Featured" },
  { label: "Price: Low to High", value: "low" },
  { label: "Price: High to Low", value: "high" },
]
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
  
        <UiDropdown
          v-model="sort"
          :options="sortOptions"
          label="Sort By"
        />

        <span>{{ products.length }} Items</span>

      </div>
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <SectionsProductsCard
        v-for="p in products"
        :key="p.id"
        v-bind="p"
      />
    </div>

  </section>
</template>