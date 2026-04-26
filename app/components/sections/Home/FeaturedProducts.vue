<script setup lang="ts">
const products = [
  {
    id: 1,
    name: "Pleated Skirt",
    slug: "pleated-skirt",
    price: "IDR 899.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-157_14b48dc6-2a4a-466f-bfa9-ddfd99a890ed.jpg?v=1772680575&width=1200",
    image2: "https://loveandflair.com/cdn/shop/files/LF-157_14b48dc6-2a4a-466f-bfa9-ddfd99a890ed.jpg"
  },
  {
    id: 2,
    name: "Minimal Dress",
    slug: "minimal-dress",
    price: "IDR 1.299.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-153_14554004-320f-4e6b-af12-928f87e83607.jpg?v=1772680587&width=1200",
    image2: "https://loveandflair.com/cdn/shop/files/LF-153_14554004-320f-4e6b-af12-928f87e83607.jpg"
  },
  {
    id: 3,
    name: "Soft Blouse",
    slug: "soft-blouse",
    price: "IDR 799.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-136_db99e3c7-06fc-4cf9-ad46-8538d7672f12.jpg?v=1772680545&width=1200",
    image2: "https://loveandflair.com/cdn/shop/files/LF-136_db99e3c7-06fc-4cf9-ad46-8538d7672f12.jpg"
  },
  {
    id: 4,
    name: "Wide Pants",
    slug: "wide-pants",
    price: "IDR 1.099.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-7_a7020aee-7eb2-473e-af8f-4ccd7730df21.jpg?v=1774410913&width=1200",
    image2: "https://loveandflair.com/cdn/shop/files/LF-7_a7020aee-7eb2-473e-af8f-4ccd7730df21.jpg"
  },
  {
    id: 5,
    name: "Classic Shirt",
    slug: "classic-shirt",
    price: "IDR 999.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-140.jpg",
    image2: "https://loveandflair.com/cdn/shop/files/LF-140.jpg"
  },
  {
    id: 6,
    name: "Tailored Blazer",
    slug: "tailored-blazer",
    price: "IDR 1.599.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-120.jpg",
    image2: "https://loveandflair.com/cdn/shop/files/LF-120.jpg"
  },
  {
    id: 7,
    name: "Tailored Blazer",
    slug: "tailored-blazer",
    price: "IDR 1.599.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-160.jpg",
    image2: "https://loveandflair.com/cdn/shop/files/LF-160.jpg"
  },
  {
    id: 8,
    name: "Tailored Blazer",
    slug: "tailored-blazer",
    price: "IDR 1.599.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-180.jpg",
    image2: "https://loveandflair.com/cdn/shop/files/LF-180.jpg"
  },
    {
    id: 9,
    name: "Tailored Blazer",
    slug: "tailored-blazer",
    price: "IDR 1.599.000",
    image: "https://loveandflair.com/cdn/shop/files/LF-170.jpg",
    image2: "https://loveandflair.com/cdn/shop/files/LF-170.jpg"
  }
]
</script>

<template>
<section class="py-20 md:py-0 px-4 md:px-8 max-w-7xl mx-auto">

  <!-- HEADER -->
  <div class="flex items-end justify-between mb-16">
    <h2 class="text-[32px] md:text-[56px] font-light leading-tight">
      Featured <span class="italic">Products</span>
    </h2>

    <NuxtLink
      to="/products"
      class="text-[11px] tracking-[0.3em] text-gray-500 hover:text-black transition"
    >
      VIEW ALL
    </NuxtLink>
  </div>

  <!-- GRID -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">

    <!-- BIG ITEM -->
    <NuxtLink
      :to="`/products/${products[0]?.slug}`"
      class="col-span-2 row-span-2 group"
    >
      <div class="relative overflow-hidden h-full">

        <!-- image -->
        <img
          :src="products[0]?.image"
          class="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />

        <!-- overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />

        <!-- content -->
        <div class="absolute bottom-6 left-6 text-white">
          <p class="text-xl font-light mb-1">
            {{ products[0]?.name }}
          </p>
          <p class="text-sm opacity-80">
            {{ products[0]?.price }}
          </p>
        </div>

      </div>
    </NuxtLink>

    <!-- SMALL ITEMS -->
    <NuxtLink
      v-for="p in products.slice(1)"
      :key="p.id"
      :to="`/products/${p.slug}`"
      class="group"
    >
      <div class="relative overflow-hidden aspect-[3/4] bg-gray-100">

        <!-- main -->
        <img
          :src="p.image"
          class="w-full h-full object-cover transition duration-700 ease-out group-hover:opacity-0"
        />

        <!-- hover -->
        <img
          :src="p.image2"
          class="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-700 ease-out group-hover:opacity-100"
        />

      </div>

      <!-- text -->
      <div class="mt-3">
        <p class="text-sm font-light group-hover:underline underline-offset-4">
          {{ p.name }}
        </p>
        <p class="text-xs text-gray-500 mt-1">
          {{ p.price }}
        </p>
      </div>
    </NuxtLink>

  </div>

</section>
</template>