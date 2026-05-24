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

const {
  dynamicSections,
  pending,
  error
} = await useDynamicSections()

const heroBanner = computed(() =>
  dynamicSections.value.find(
    section => section.sectionKey === "hero_banner"
  )
)

const runningText = computed(() =>
  dynamicSections.value.find(
    section => section.sectionKey === "running_text"
  )
)

const featuredProducts = computed(() =>
  dynamicSections.value.find(
    section => section.sectionKey === "featured_products"
  )
)

const collectionSection = computed(() =>
  dynamicSections.value.find(
    section => section.sectionKey === "collection_section"
  )
)

const collectionSection2 = computed(() =>
  dynamicSections.value.find(
    section => section.sectionKey === "collection_section_2"
  )
)

console.log(dynamicSections.value)
</script>

<template>
  <div class="bg-white">
    <div>
      <SectionsHomeHero :slides="heroBanner?.content" />

      <SectionsHomeAnnouncementBar :runningText="runningText?.content.text"/>

      <SectionsHomeNewArrivals /> 

      <SectionsHomeFeaturedProducts :featuredProducts="featuredProducts?.content" />

      <SectionsHomeEditorialSplit
        :title="collectionSection?.content.title"
        :subtitle="collectionSection?.content.subtitle"
        :image="collectionSection?.content.image"
        :buttonText="collectionSection?.content.buttonText"
        :buttonLink="collectionSection?.content.buttonLink"
      />

      <SectionsHomeEditorialProductGrid />

      <SectionsHomeFeaturedCategories />

      <SectionsHomeEditorialBanner
        :title="collectionSection2?.content.title"
        :subtitle="collectionSection2?.content.subtitle"
        :image="collectionSection2?.content.image"
        :buttonText="collectionSection2?.content.buttonText"
        :buttonLink="collectionSection2?.content.buttonLink"
      />
    </div>
  </div>
</template>