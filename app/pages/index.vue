<script setup lang="ts">
const slides = [
  {
    title: "",
    image:
      "https://loveandflair.com/cdn/shop/files/Banner_WEB_01580e15-31d8-4760-9cf0-e3b0a52ddb3b.jpg?v=1776983430&width=3000"
  },
  {
    title: "",
    image:
      "https://loveandflair.com/cdn/shop/files/Banner_WEB_e1654985-6680-4d4f-8b49-10dc49d9a281.png?v=1775106692&width=3000"
  },
  {
    title: "",
    image:
      "https://loveandflair.com/cdn/shop/files/Banner_WEB_5e801fdc-0d5d-475b-a7db-7f44160e7ca6.png?v=1772611660&width=3000"
  },
  {
    title: "",
    image:
      "https://loveandflair.com/cdn/shop/files/Banner_WEB_d61cb1ea-8403-4095-b601-926fe7e143ff.png?v=1771554406&width=3000"
  }
]
</script>

<template>
  <div class="bg-white">
    <div>
      <SectionsHomeHero :slides="slides" />

      <SectionsHomeAnnouncementBar />

      <SectionsHomeNewArrivals /> 

      <SectionsHomeFeaturedProducts/>

      <SectionsHomeEditorialSplit
        title="A Season of Ease"
        subtitle="SUMMER 2026"
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
      />

      <SectionsHomeEditorialProductGrid />

      <SectionsHomeFeaturedCategories />

      <SectionsHomeEditorialBanner
        title="A Season of Ease"
        subtitle="SUMMER 2026"
        image="https://www.masarishop.com/media/wysiwyg/Editorial/cadence-canvas/260312_lookbook_cadence_canvas_homepage.jpg"
      />

      <section class="py-24 text-center">
        <h2 class="font-serif text-3xl italic mb-4">
          Join Our World
        </h2>

        <p class="text-sm text-gray-500 mb-6">
          Get exclusive offers and updates
        </p>

        <div class="flex justify-center gap-2">
          <input
            placeholder="Your email"
            class="border px-4 py-2 w-64"
          />
          <button class="border px-6 py-2 text-sm tracking-wide">
            SUBSCRIBE
          </button>
        </div>
      </section>
    </div>
  </div>
</template>