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

// 👉 SWIPE SUPPORT
let startX = 0

let startY = 0

const onTouchStart = (e: TouchEvent) => {
  if (!e.touches.length) return
  startX = e.touches[0]!.clientX
  startY = e.touches[0]!.clientY
}

const onTouchEnd = (e: TouchEvent) => {
  if (!e.changedTouches.length) return

  const endX = e.changedTouches[0]!.clientX
  const endY = e.changedTouches[0]!.clientY

  const diffX = startX - endX
  const diffY = startY - endY

  // 👉 ignore kalau scroll vertical lebih dominan
  if (Math.abs(diffY) > Math.abs(diffX)) return

  if (diffX > 50) nextSlide()
  if (diffX < -50) prevSlide()
}

onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section
    class="relative w-full overflow-hidden
           h-[75vh] md:h-screen"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >

    <!-- SLIDES -->
    <div class="relative h-full w-full">

      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        :class="[
          i === current
            ? 'translate-x-0 opacity-100 z-10'
            : direction === 'next'
              ? 'translate-x-full opacity-0'
              : '-translate-x-full opacity-0'
        ]"
      >
        <!-- IMAGE -->
        <img
          :src="slide.image"
          class="w-full h-full object-cover"
        />

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-black/20"></div>

        <!-- TITLE (optional, mobile safe) -->
        <div class="absolute bottom-10 left-6 right-6 text-white">
          <h2 class="text-lg md:text-3xl font-light tracking-wide">
            {{ slide.title }}
          </h2>
        </div>
      </div>

    </div>

    <!-- ARROWS -->
    <button
      @click="prevSlide"
      class="absolute left-3 md:left-6 top-1/2 -translate-y-1/2
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
      class="absolute right-3 md:right-6 top-1/2 -translate-y-1/2
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
    <div class="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex items-center gap-2">
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