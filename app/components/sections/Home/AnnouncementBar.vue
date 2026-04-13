<script setup lang="ts">
const text =
  "FREE SHIPPING — ORDERS ABOVE IDR 500,000 / SGD 200 / MYR 600"
</script>

<template>
  <div class="w-full bg-gray-100 overflow-hidden whitespace-nowrap py-2">
    <div class="flex animate-marquee py-2 text-xs tracking-[0.2em] text-gray-700">

      <template v-for="i in 10" :key="i">
        <!-- TEXT -->
        <span class="px-6">
          {{ text }}
        </span>

        <!-- DOT -->
        <span class="text-gray-400 text-[20px]">•</span>
      </template>

    </div>
  </div>
</template>