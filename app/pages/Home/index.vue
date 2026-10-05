<script setup lang="ts">

useHead({
  title: 'Home - The Underwear Supply'
})

const {
  dynamicSections
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