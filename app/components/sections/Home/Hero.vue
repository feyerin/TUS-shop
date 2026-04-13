<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

interface Slide {
  title: string
  image: string
}

const props = defineProps<{
  slides: Slide[]
}>()

const current = ref(0)
const direction = ref<"next" | "prev">("next")

let interval: any = null

const nextSlide = () => {
  direction.value = "next"
  current.value = (current.value + 1) % props.slides.length
}

const prevSlide = () => {
  direction.value = "prev"
  current.value =
    (current.value - 1 + props.slides.length) % props.slides.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">

    <!-- SLIDES -->
    <div class="relative h-full w-full">

      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        :class="[
          i === current
            ? 'translate-x-0 opacity-100 z-10'
            : direction === 'next'
              ? 'translate-x-full opacity-0'
              : '-translate-x-full opacity-0'
        ]"
      >
        <!-- IMAGE -->
        <NuxtImg
          :src="slide.image"
          class="w-full h-full object-cover"
        />

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

    </div>

    <!-- ARROWS -->
    <button
      @click="prevSlide"
      class="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl opacity-40 hover:opacity-100 transition"
    >
      ‹
    </button>

    <button
      @click="nextSlide"
      class="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl opacity-40 hover:opacity-100 transition"
    >
      ›
    </button>

    <!-- DOTS (KANAN BAWAH - PREMIUM) -->
    <div class="absolute bottom-8 right-8 flex items-center gap-2">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="current = i"
        :class="[
          'h-[2px] transition-all duration-300',
          current === i
            ? 'w-6 bg-white'
            : 'w-3 bg-white/40'
        ]"
      />
    </div>

  </section>
</template>