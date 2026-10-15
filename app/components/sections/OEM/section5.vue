<script setup lang="ts">
let animationContext: gsap.Context | null = null;
const expandedCards = ref<number[]>([]);

const {
  dynamicSections
} = await useDynamicSections()

const OEMProduct = computed(() =>
  dynamicSections.value.find(
    section => section.sectionKey === "oem"
  )
)

const toggleDescription = (index: number) => {
  expandedCards.value = expandedCards.value.includes(index)
    ? expandedCards.value.filter((item) => item !== index)
    : [...expandedCards.value, index];
};

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  animationContext = gsap.context(() => {
    const section = document.querySelector(".clothing-types-section");

    if (!section) return;

    const eyebrow = section.querySelector(".clothing-types-eyebrow");
    const title = section.querySelector(".clothing-types-title");
    const description = section.querySelector(
      ".clothing-types-description",
    );
    const cards = section.querySelectorAll(".clothing-type-card");
    const images = section.querySelectorAll(".clothing-type-image");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * Reduced motion
     */
    if (reduceMotion) {
      gsap.set(
        [eyebrow, title, description, cards, images],
        {
          clearProps: "all",
        },
      );

      return;
    }

    /*
     * Header reveal
     */
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });

    headerTimeline.fromTo(
      eyebrow,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
    );

    headerTimeline.fromTo(
      title,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.35",
    );

    headerTimeline.fromTo(
      description,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5",
    );

    /*
     * Cards reveal
     */
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".clothing-types-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      },
    );

    /*
     * Image scale
     */
    gsap.fromTo(
      images,
      {
        scale: 1.08,
      },
      {
        scale: 1,
        duration: 1.4,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".clothing-types-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
});

onUnmounted(() => {
  animationContext?.revert();
});
</script>

<template>
  <section
    id="clothing-types"
    class="clothing-types-section overflow-hidden bg-[#F9F8F6] py-20 sm:py-24 lg:py-28"
  >
    <div class="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
      <!-- Header -->
      <div class="mx-auto mb-14 max-w-[760px] text-center sm:mb-16 lg:mb-20">
        <p
          class="clothing-types-eyebrow mb-5 font-secondary text-[20px] font-bold leading-tight text-[#89A79D] sm:text-[22px]"
        >
          {{ OEMProduct?.title }}
        </p>

        <h2
          class="clothing-types-title font-primary text-[42px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#181818] sm:text-[50px] lg:text-[58px]"
        >
          {{ OEMProduct?.subtitle }}
        </h2>

        <p
          class="clothing-types-description mx-auto mt-6 max-w-[650px] font-primary text-[18px] leading-[1.65] text-[#555] sm:text-[20px]"
        >
          From everyday essentials to complete fashion collections, we
          manufacture a wide range of garments tailored to your brand.
        </p>
      </div>

      <!-- Clothing Grid -->
      <div
        class="clothing-types-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        <article
          v-for="(clothing, index) in OEMProduct?.content"
          :key="`${clothing.productName}-${index}`"
          class="clothing-type-card group relative overflow-hidden rounded-[18px] bg-white opacity-0"
        >
          <!-- Image -->
          <div class="relative aspect-[0.78] overflow-hidden">
            <img
              :src="clothing.image"
              :alt="clothing.productName"
              class="clothing-type-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <!-- Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
            />

            <!-- Content -->
            <div
              class="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7"
            >
              <h3
                class="font-primary text-[25px] font-extrabold leading-tight tracking-[-0.02em]"
              >
                {{ clothing.productName }}
              </h3>

              <p
                class="mt-2 max-w-[260px] font-primary text-[14px] leading-[1.5] text-white/85 transition-all duration-300 sm:text-[15px]"
                :class="{
                  'line-clamp-2': !expandedCards.includes(clothing.productName),
                }"
              >
                {{ clothing.description }}
              </p>

              <!-- Arrow -->
              <button
                type="button"
                class="mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 transition-all duration-300 hover:translate-x-1 hover:bg-white hover:text-[#181818]"
                :aria-expanded="expandedCards.includes(clothing.productName)"
                :aria-label="
                  expandedCards.includes(clothing.productName)
                    ? 'Show less description'
                    : 'Show full description'
                "
                @click="toggleDescription(clothing.productName)"
              >
                <Icon
                  name="lucide:arrow-up-right"
                  size="17"
                  :stroke-width="1.8"
                  class="transition-transform duration-300"
                  :class="{
                    'rotate-180': expandedCards.includes(clothing.productName),
                  }"
                />
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>