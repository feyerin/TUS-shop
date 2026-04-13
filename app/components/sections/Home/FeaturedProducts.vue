<script setup lang="ts">
const featured = [
  {
    title: "ACTIVEWEAR",
    image: "https://loveandflair.com/cdn/shop/files/Screenshot_2026-03-05_at_09.58.48.png?v=1772679540&width=1100",
    link: "/category/activewear"
  },
  {
    title: "DRESSES",
    image: "https://loveandflair.com/cdn/shop/files/Screenshot_2026-03-30_at_10.16.11.png?v=1774840582&width=1100",
    link: "/category/dresses"
  },
  {
    title: "KNITWEAR",
    image: "https://loveandflair.com/cdn/shop/files/Screenshot_2026-03-30_at_10.13.30.png?v=1774840421&width=1100",
    link: "/category/knitwear"
  }
]
</script>

<template>
  <section class="py-20 px-6 max-w-7xl mx-auto">
    
    <div class="grid md:grid-cols-3 gap-12 md:gap-0">

      <NuxtLink
        v-for="(item, i) in featured"
        :key="item.title"
        :to="item.link"
        class="group text-center relative px-4"
      >
        <!-- divider -->
        <div
          v-if="i !== 0"
          class="hidden md:block absolute left-0 top-0 h-full w-px bg-gray-200"
        />

        <!-- IMAGE -->
        <div class="overflow-hidden mb-6">
          <NuxtImg
            :src="item.image"
            class="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <!-- TITLE -->
        <h3 class="text-sm tracking-[0.2em] text-gray-800">
          {{ item.title }}
        </h3>

        <!-- UNDERLINE -->
        <div class="w-12 h-px bg-gray-800 mx-auto mt-3 transition-all duration-300 group-hover:w-20" />
      </NuxtLink>

    </div>

  </section>
</template>