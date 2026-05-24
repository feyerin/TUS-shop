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
  <section class="py-20 px-6 max-w-7xl mx-auto">
    
    <div class="grid md:grid-cols-3 gap-12 md:gap-0">

      <NuxtLink
        v-for="(item, i) in brands"
        :key="item.id"
        :to="`/brands/${item.slug}`"
        class="group text-center relative px-4"
      >
        <!-- divider -->
        <div
          v-if="i !== 0"
          class="hidden md:block absolute left-0 top-0 h-full w-px bg-gray-200"
        />

        <!-- IMAGE -->
        <div class="overflow-hidden mb-6">
          <img
            :src="item.profileImageUrl"
            class="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <!-- TITLE -->
        <h3 class="text-sm tracking-[0.2em] text-gray-800">
          {{ item.name }}
        </h3>

        <!-- UNDERLINE -->
        <div class="w-12 h-px bg-gray-800 mx-auto mt-3 transition-all duration-300 group-hover:w-20" />
      </NuxtLink>

    </div>

  </section>
</template>