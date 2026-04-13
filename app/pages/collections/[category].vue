<script setup lang="ts">
import { ref } from "vue"

const products = [
  {
    id: 1,
    name: "Ceres Two-Piece Dress In Beige",
    price: 1200000,
    image: "https://loveandflair.com/cdn/shop/files/LF-157_14b48dc6-2a4a-466f-bfa9-ddfd99a890ed.jpg?v=1772680575&width=1200",
    soldOut: true
  },
  {
    id: 2,
    name: "Ceres Two-Piece Dress In Sage Grey",
    price: 1200000,
    image: "https://loveandflair.com/cdn/shop/files/LF-153_14554004-320f-4e6b-af12-928f87e83607.jpg?v=1772680587&width=1200"
  },
  {
    id: 3,
    name: "Cassiopeia Two-Piece Dress In Silver",
    price: 1099000,
    image: "https://loveandflair.com/cdn/shop/files/LF-428_674cb420-591b-4795-9264-789d95ec7398.jpg?v=1764729044&width=1200"
  },
  {
    id: 4,
    name: "Cassiopeia Two-Piece Dress In Pink",
    price: 1099000,
    image: "https://loveandflair.com/cdn/shop/files/LF-182_1ae6d18f-cf3f-4be0-8e7f-15e06c3c9143.jpg?v=1767777984&width=1200",
    soldOut: true
  },
  {
    id: 5,
    name: "Cassiopeia Two-Piece Dress In Pink",
    price: 1099000,
    image: "https://loveandflair.com/cdn/shop/files/LF-182_1ae6d18f-cf3f-4be0-8e7f-15e06c3c9143.jpg?v=1767777984&width=1200",
    soldOut: true
  },
  {
    id: 6,
    name: "Cassiopeia Two-Piece Dress In Pink",
    price: 1099000,
    image: "https://loveandflair.com/cdn/shop/files/LF-182_1ae6d18f-cf3f-4be0-8e7f-15e06c3c9143.jpg?v=1767777984&width=1200",
    soldOut: true
  }
]

const sort = ref("Featured")
</script>

<template>
  <section class="px-6 py-24 max-w-7xl mx-auto">
    
    <!-- TOP BAR -->
    <div class="flex items-center justify-between mb-8 text-sm">
      
      <button class="flex items-center gap-2 text-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.75 16.125H3.75" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
          <path d="M20.25 16.125H15.75" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
          <path d="M6.75 7.875H3.75" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
          <path d="M20.25 7.875H9.75" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
          <path class="animate-in-hover animate-right" d="M9.75 5.625V10.125" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
          <path class="animate-in-hover animate-left" d="M15.75 18.375V13.875" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
        </svg>
        Filter
      </button>

      <div class="flex items-center gap-6 text-gray-600">
        <div class="flex items-center gap-2 cursor-pointer">
          <span>Sort By:</span>
          <span class="text-black">{{ sort }}</span>
          <span>▾</span>
        </div>

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