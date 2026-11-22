<script setup lang="ts">
import type { Brand, BrandResponse } from '~/type/brand'

const { getBrands } = useBrandApi()

const brands = ref<Brand[]>([])

const fetchBrand = async () => {
  try {
    const res: BrandResponse =
      await getBrands()

    brands.value = res.data.brands ?? []
  } catch (err) {
    console.error(
      'Failed fetch brand',
      err
    )
  }
}

onMounted(() => {
  fetchBrand()
})
</script>

<template>
  <section class="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">

    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 md:gap-0">

      <NuxtLink
        v-for="(item, i) in brands"
        :key="item.id"
        :to="`/brand/${item.slug}`"
        class="group text-center relative md:px-4"
      >
        <!-- divider (desktop only) -->
        <div
          v-if="i % 3 !== 0"
          class="hidden md:block absolute left-0 top-0 h-full w-px bg-gray-200"
        />

        <!-- IMAGE -->
        <img
          :src="item.profileImageUrl"
          :alt="item.name"
          class="w-full aspect-square object-cover transition duration-700 group-hover:scale-105"
        />

        <!-- TITLE -->
        <h3 class="text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-gray-800">
          {{ item.name }}
        </h3>

        <!-- UNDERLINE -->
        <div class="w-8 md:w-12 h-px bg-gray-800 mx-auto mt-2 md:mt-3 transition-all duration-300 group-hover:w-14 md:group-hover:w-20" />
      </NuxtLink>

    </div>

  </section>
</template>