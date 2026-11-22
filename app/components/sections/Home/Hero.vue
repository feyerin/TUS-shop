<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

type Slide =
  | string
  | {
      desktop: string
      mobile: string
    }

const props = defineProps<{
  slides: Slide[]
}>()

const current = ref(0)
const direction = ref<"next" | "prev">("next")

let interval: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  direction.value = "next"
  current.value = (current.value + 1) % props.slides.length
}

const prevSlide = () => {
  direction.value = "prev"
  current.value =
    (current.value - 1 + props.slides.length) % props.slides.length
}

const getDesktop = (slide: Slide) =>
  typeof slide === "string" ? slide : slide.desktop

const getMobile = (slide: Slide) =>
  typeof slide === "string" ? slide : slide.mobile

// SWIPE SUPPORT
let startX = 0
let startY = 0

const onTouchStart = (e: TouchEvent) => {
  if (!e.touches.length) return
  startX = e.touches[0]!.clientX
  startY = e.touches[0]!.clientY
}

const onTouchEnd = (e: TouchEvent) => {
  if (!e.changedTouches.length) return

  const diffX = startX - e.changedTouches[0]!.clientX
  const diffY = startY - e.changedTouches[0]!.clientY

  if (Math.abs(diffY) > Math.abs(diffX)) return

  if (diffX > 50) nextSlide()
  if (diffX < -50) prevSlide()
}

onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section
    class="mt-14 md:mt-14 relative w-full overflow-hidden bg-black"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >

    <!-- SLIDES: ditumpuk di 1 sel grid, tinggi ikut gambar -->
    <div class="grid w-full">

      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="relative col-start-1 row-start-1
               transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        :class="[
          i === current
            ? 'translate-x-0 opacity-100 z-10'
            : direction === 'next'
              ? 'translate-x-full opacity-0'
              : '-translate-x-full opacity-0'
        ]"
      >
        <!-- IMAGE -->
        <picture class="block w-full">
          <source
            media="(min-width: 768px)"
            :srcset="getDesktop(slide)"
          />
          <img
            :src="getMobile(slide)"
            :alt="`Slide ${i + 1}`"
            :loading="i === 0 ? 'eager' : 'lazy'"
            class="block w-full h-auto"
          />
        </picture>

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

    </div>

    <!-- ARROWS -->
    <button
      @click="prevSlide"
      aria-label="Previous slide"
      class="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20
             text-white text-2xl md:text-3xl
             bg-black/20 md:bg-transparent
             w-8 h-8 md:w-auto md:h-auto
             flex items-center justify-center
             rounded-full md:rounded-none
             backdrop-blur-sm md:backdrop-blur-0
             opacity-70 hover:opacity-100 transition"
    >
      ‹
    </button>

    <button
      @click="nextSlide"
      aria-label="Next slide"
      class="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20
             text-white text-2xl md:text-3xl
             bg-black/20 md:bg-transparent
             w-8 h-8 md:w-auto md:h-auto
             flex items-center justify-center
             rounded-full md:rounded-none
             backdrop-blur-sm md:backdrop-blur-0
             opacity-70 hover:opacity-100 transition"
    >
      ›
    </button>

    <!-- DOTS -->
    <div class="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 flex items-center gap-2">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="current = i"
        :aria-label="`Go to slide ${i + 1}`"
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