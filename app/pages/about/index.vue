<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 700)
})
</script>

<template>
  <div class="bg-white text-black antialiased selection:bg-black selection:text-white">

    <!-- LOADING -->
    <div
      v-if="!loaded"
      class="fixed inset-0 bg-white flex items-center justify-center"
    >
      <p class="tracking-[0.5em] text-[10px] text-black/40 animate-pulse">
        HOUSE OF SILENCE
      </p>
    </div>

    <main v-else class="opacity-100 transition-opacity duration-700">

      <!-- HERO -->
      <section class="h-screen flex items-center justify-center text-center px-6 relative">

        <div class="max-w-3xl">
          <p class="text-[11px] tracking-[0.5em] text-gray-400 mb-10">
            A STUDY IN REDUCTION
          </p>

          <h1 class="text-5xl md:text-7xl font-serif leading-[1.05]">
            Clothing that disappears,<br />
            leaving only presence.
          </h1>

          <p class="mt-10 text-gray-500 max-w-xl mx-auto leading-relaxed">
            House of Silence exists at the intersection of restraint and emotion.
            We design garments that do not compete with the wearer, but refine them.
          </p>
        </div>

      </section>

      <div class="h-px bg-gray-100 mx-6 md:mx-24"></div>

      <!-- BRAND INTRO -->
      <section class="py-40 px-6 md:px-24 text-center">
        <p class="max-w-4xl mx-auto text-2xl md:text-3xl font-serif leading-[1.6] text-gray-800">
          House of Silence is not defined by trend or season, but by discipline.
          It is a study of what remains when everything unnecessary is removed—
          fabric, form, and silence working as one language.
        </p>
      </section>

      <!-- IMAGE SPLIT -->
      <section class="px-6 md:px-24 pb-40 grid md:grid-cols-2 gap-16 items-center">

        <div class="overflow-hidden">
          <img
            src="https://loveandflair.com/cdn/shop/files/LF-100.jpg"
            class="w-full h-[700px] object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition duration-700 ease-out"
          />
        </div>

        <div class="space-y-8">
          <p class="text-[11px] tracking-[0.5em] text-gray-400">
            FOUNDING PRINCIPLE
          </p>

          <h2 class="text-3xl font-serif leading-tight">
            Born from silence, refined through repetition
          </h2>

          <p class="text-gray-600 leading-relaxed">
            Established in 2026, the brand began as a rejection of visual excess in modern fashion.
            We questioned why clothing often speaks louder than the person wearing it.
          </p>

          <p class="text-gray-600 leading-relaxed">
            Through continuous reduction, we arrived at a design language rooted in architecture:
            clean lines, controlled volume, and intentional emptiness.
          </p>

          <p class="text-gray-600 leading-relaxed">
            Each garment is treated as a quiet structure—built to hold shape, but never dominate space.
          </p>
        </div>

      </section>

      <!-- TIMELINE -->
      <section class="py-44 bg-gray-50 px-6 md:px-24">

        <div class="max-w-5xl mx-auto space-y-28 text-center">

          <div>
            <p class="text-[11px] tracking-[0.5em] text-gray-400 mb-4">2026</p>
            <h3 class="text-3xl font-serif">The First Study in Form</h3>
            <p class="mt-5 text-gray-600 max-w-2xl mx-auto">
              The debut collection introduced our core language: muted palettes, structured silhouettes,
              and garments designed to feel almost weightless in their intention.
            </p>
          </div>

          <div>
            <p class="text-[11px] tracking-[0.5em] text-gray-400 mb-4">PHILOSOPHY</p>
            <h3 class="text-3xl font-serif">Design as subtraction</h3>
            <p class="mt-5 text-gray-600 max-w-2xl mx-auto">
              We believe clarity is achieved through removal. Every seam, cut, and proportion exists
              only if it serves balance.
            </p>
          </div>

          <div>
            <p class="text-[11px] tracking-[0.5em] text-gray-400 mb-4">NOW</p>
            <h3 class="text-3xl font-serif">An evolving quiet archive</h3>
            <p class="mt-5 text-gray-600 max-w-2xl mx-auto">
              The collection continues to grow as a study in continuity—each piece connected,
              each release a further refinement of the same idea.
            </p>
          </div>

        </div>

      </section>

      <!-- PHILOSOPHY GRID -->
      <section class="py-44 px-6 md:px-24">

        <div class="grid md:grid-cols-3 gap-16">

          <div class="space-y-5">
            <p class="text-[11px] tracking-[0.5em] text-gray-400">DESIGN</p>
            <h4 class="font-serif text-2xl">Structured restraint</h4>
            <p class="text-gray-600 leading-relaxed">
              Every silhouette is constructed like architecture—measured, deliberate, and free of excess gesture.
            </p>
          </div>

          <div class="space-y-5">
            <p class="text-[11px] tracking-[0.5em] text-gray-400">MATERIAL</p>
            <h4 class="font-serif text-2xl">Honest tactility</h4>
            <p class="text-gray-600 leading-relaxed">
              Fabrics are selected not for decoration, but for how they behave in motion, weight, and stillness.
            </p>
          </div>

          <div class="space-y-5">
            <p class="text-[11px] tracking-[0.5em] text-gray-400">INTENTION</p>
            <h4 class="font-serif text-2xl">Presence without noise</h4>
            <p class="text-gray-600 leading-relaxed">
              The goal is not to be seen loudly, but to be remembered quietly.
            </p>
          </div>

        </div>

      </section>

      <!-- CLOSING -->
      <section class="py-44 text-center px-6 bg-white">
        <p class="max-w-3xl mx-auto text-3xl md:text-4xl font-serif leading-[1.5]">
          We do not design to impress.<br />
          We design to endure.
        </p>
      </section>

      <!-- FOOTER -->
      <footer class="py-28 border-t border-gray-100 text-center">
        <p class="text-[11px] tracking-[0.5em] text-gray-400">
          HOUSE OF SILENCE © 2026 — A STUDY IN QUIET DESIGN
        </p>
      </footer>

    </main>
  </div>
</template>