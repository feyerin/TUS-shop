<script setup lang="ts">
import { useRoute } from "vue-router"
import { computed } from "vue"

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/").filter(Boolean)

  const crumbs = pathArray.map((segment, index) => {
    const to = "/" + pathArray.slice(0, index + 1).join("/")

    return {
      label: formatLabel(segment),
      to
    }
  })

  return [
    { label: "Home", to: "/" },
    ...crumbs
  ]
})

function formatLabel(str: string) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase())
}
</script>

<template>
  <div class="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
    <template v-for="(item, i) in breadcrumbs" :key="item.to">
      
      <NuxtLink
        v-if="i !== breadcrumbs.length - 1"
        :to="item.to"
        class="hover:text-black transition"
      >
        {{ item.label }}
      </NuxtLink>

      <span v-else class="text-black">
        {{ item.label }}
      </span>

      <span v-if="i < breadcrumbs.length - 1">/</span>

    </template>
  </div>
</template>