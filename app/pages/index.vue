<script setup lang="ts">

const slides = [
  {
    title: "Effortless Style",
    image:
      "https://loveandflair.com/cdn/shop/files/Banner_WEB_e1654985-6680-4d4f-8b49-10dc49d9a281.png?v=1775106692&width=3000"
  },
  {
    title: "New Season Arrivals",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
  },
  {
    title: "Minimal Everyday Wear",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
  }
]

const collections = [
  {
    title: "Summer 2026",
    subtitle: "Light & Airy",
    image: "https://www.masarishop.com/media/.renditions/wysiwyg/Editorial/kinetic-ambition/260219_lookbook_kinetic_ambition_editorial.jpg",
    link: "/collections/summer"
  },
  {
    title: "Evening Edit",
    subtitle: "Elegant Nights",
    image: "https://www.masarishop.com/media/.renditions/wysiwyg/Editorial/trendstotry-the-90-codes/250912_trends_to_try_rhythm_of_depth_editorial.jpg",
    link: "/collections/evening"
  }
]
</script>

<template>
  <div class="bg-white">

    <SectionsHomeHero :slides="slides" />

    <SectionsHomeAnnouncementBar />

    <SectionsHomeNewArrivals />

    <section class="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      <SectionsHomeCollection
        v-for="c in collections"
        :key="c.title"
        :title="c.title"
        :subtitle="c.subtitle"
        :image="c.image"
        :link="c.link"
      />
    </section>    

    <SectionsHomeEditorialSplit
      title="A Season of Ease"
      subtitle="SUMMER 2026"
      image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
    />

    <SectionsHomeEditorialProductGrid />

    <SectionsHomeFeaturedProducts />

    <SectionsHomeEditorialBanner
      title="A Season of Ease"
      subtitle="SUMMER 2026"
      image="https://www.masarishop.com/media/wysiwyg/Editorial/cadence-canvas/260312_lookbook_cadence_canvas_homepage.jpg"
    />

    <section class="py-24">
      <div class="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div class="text-center text-white">
            <h2 class="font-serif text-5xl italic mb-4">
              Summer Collection
            </h2>
            <button class="border px-6 py-2 text-sm tracking-[0.2em]">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <h2 class="text-center text-sm tracking-widest mb-8">
        FOLLOW US
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
        <img v-for="i in 6" :key="i"
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          class="w-full h-[150px] object-cover"
        />
      </div>
    </section>

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
</template>