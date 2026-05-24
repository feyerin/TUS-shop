<script setup lang="ts">
import type { Product } from "~/type/product"

const props = defineProps<{
  featuredProducts: Product[]
}>()

const { currency } = useFormatter()

const products = computed(() => props.featuredProducts || [])

const featuredProduct = computed(() => products.value[0])

const secondaryProducts = computed(() =>
  products.value.slice(1, 9)
)
</script>

<template>
  <section class="py-20 md:py-0 px-4 md:px-8 max-w-7xl mx-auto">
    <!-- HEADER -->
    <div class="flex items-end justify-between mb-16">
      <h2 class="text-[32px] md:text-[56px] font-light leading-tight">
        Featured
        <span class="italic font-secondary">
          Products
        </span>
      </h2>

      <NuxtLink
        to="/collections/all"
        class="text-[11px] tracking-[0.3em] text-gray-500 hover:text-black transition"
      >
        VIEW ALL
      </NuxtLink>
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
      <!-- BIG ITEM -->
      <NuxtLink
        v-if="featuredProduct"
        :to="`/products/${featuredProduct.slug}`"
        class="col-span-2 row-span-2 group"
      >
        <div class="relative overflow-hidden h-full bg-gray-100">
          <img
            :src="featuredProduct.imageUrl"
            :alt="featuredProduct.name"
            class="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />

          <!-- overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />

          <!-- content -->
          <div class="absolute bottom-6 left-6 text-white">
            <p class="text-xl font-light mb-1">
              {{ featuredProduct.name }}
            </p>

            <div class="flex items-center gap-2">
              <p class="text-sm opacity-90">
                {{
                  currency(
                    featuredProduct.finalPrice > 0
                      ? featuredProduct.finalPrice
                      : featuredProduct.basePrice
                  )
                }}
              </p>

              <p
                v-if="
                  featuredProduct.discountValue > 0 &&
                  featuredProduct.finalPrice > 0
                "
                class="text-xs opacity-60 line-through"
              >
                {{ currency(featuredProduct.basePrice) }}
              </p>
            </div>
          </div>
        </div>
      </NuxtLink>

      <!-- SMALL ITEMS -->
      <NuxtLink
        v-for="product in secondaryProducts"
        :key="product.id"
        :to="`/products/${product.slug}`"
        class="group"
      >
        <div class="relative overflow-hidden aspect-[3/4] bg-gray-100">
          <img
            :src="product.imageUrl"
            :alt="product.name"
            class="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-500" />
        </div>

        <!-- TEXT -->
        <div class="mt-3">
          <p class="text-sm font-light line-clamp-1 group-hover:underline underline-offset-4">
            {{ product.name }}
          </p>

          <p class="text-[11px] tracking-[0.2em] text-gray-400 uppercase mt-1">
            {{ product.brandName }}
          </p>

          <div class="flex items-center gap-2 mt-1">
            <p class="text-xs text-gray-700">
              {{
                currency(
                  product.finalPrice > 0
                    ? product.finalPrice
                    : product.basePrice
                )
              }}
            </p>

            <p
              v-if="
                product.discountValue > 0 &&
                product.finalPrice > 0
              "
              class="text-[11px] text-gray-400 line-through"
            >
              {{ currency(product.basePrice) }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>