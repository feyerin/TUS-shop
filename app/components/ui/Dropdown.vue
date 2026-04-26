<script setup lang="ts">
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"

interface Option {
  label: string
  value: string
}

const props = defineProps<{
  modelValue: string
  options: Option[]
  label?: string
}>()

const emit = defineEmits(["update:modelValue"])

const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)

const select = (value: string) => {
  emit("update:modelValue", value)
  isOpen.value = false
}

onClickOutside(root, () => {
  isOpen.value = false
})
</script>

<template>
  <div ref="root" class="relative text-sm">
    
    <!-- Trigger -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2"
    >
      <span v-if="label">{{ label }}:</span>
      <span class="text-black">{{ modelValue }}</span>
      <Icon
        name="heroicons:chevron-down"
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        />
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50"
    >
      <button
        v-for="opt in options"
        :key="opt.value"
        @click="select(opt.value)"
        class="w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        {{ opt.label }}
      </button>
    </div>

  </div>
</template>