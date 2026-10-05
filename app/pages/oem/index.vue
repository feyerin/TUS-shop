<script setup lang="ts">
useHead({
  title: 'OEM - The Underwear Supply',
})

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <main class="relative">
    <SectionsOEMSection1 />
    <SectionsOEMSection2 />
    <SectionsOEMSection3 />
    <SectionsOEMSection4 />
    <SectionsOEMSection5 />
    <SectionsOEMSection6 />
    <SectionsOEMSection7 />

    <!-- Floating Go To Store -->
    <NuxtLink
      to="/home"
      aria-label="Go to Store"
      class="group fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center overflow-hidden rounded-full bg-[#171717] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-[width,box-shadow] duration-500 ease-out hover:w-[160px] hover:shadow-[0_14px_40px_rgba(0,0,0,0.25)] sm:bottom-8 sm:right-8"
    >
      <span
        class="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-95"
      >
        <Icon
          name="lucide:shopping-bag"
          size="21"
          :stroke-width="1.7"
        />
      </span>

      <span
        class="whitespace-nowrap text-sm font-medium tracking-wide opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      >
        Go to Store
      </span>

      <Icon
        name="lucide:arrow-up-right"
        size="15"
        :stroke-width="1.8"
        class="ml-2 mr-4 shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </NuxtLink>
  </main>
</template>