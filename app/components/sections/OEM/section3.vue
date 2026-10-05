<script setup lang="ts">
interface ClothingCategory {
  title: string;
  icon: string;
}

const clothingCategories: ClothingCategory[] = [
  {
    title: "Custom Clothing for Women",
    icon: "lucide:arrow-right",
  },
  {
    title: "Custom Clothing for Men",
    icon: "lucide:arrow-right",
  },
  {
    title: "Custom Clothing for Kids",
    icon: "lucide:arrow-right",
  },
];

let animationContext: gsap.Context | null = null;

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  animationContext = gsap.context(() => {
    const section = document.querySelector(".custom-clothing-section");

    if (!section) return;

    const content = section.querySelector(".custom-clothing-content");
    const eyebrow = section.querySelector(".custom-clothing-eyebrow");
    const title = section.querySelector(".custom-clothing-title");
    const paragraphs = section.querySelectorAll(
      ".custom-clothing-description p",
    );
    const categories = section.querySelectorAll(
      ".custom-clothing-category",
    );
    const imageWrapper = section.querySelector(
      ".custom-clothing-image-wrapper",
    );
    const image = section.querySelector(".custom-clothing-image");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * Reduced motion
     */
    if (reduceMotion) {
      gsap.set(
        [
          content,
          eyebrow,
          title,
          paragraphs,
          categories,
          imageWrapper,
          image,
        ],
        {
          clearProps: "all",
        },
      );

      return;
    }

    /*
     * ============================
     * CONTENT REVEAL
     * ============================
     */

    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Eyebrow
    contentTimeline.fromTo(
      eyebrow,
      {
        opacity: 0,
        x: -25,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      },
    );

    // Heading
    contentTimeline.fromTo(
      title,
      {
        opacity: 0,
        y: 45,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.35",
    );

    // Paragraphs
    contentTimeline.fromTo(
      paragraphs,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      },
      "-=0.45",
    );

    /*
     * ============================
     * CATEGORY LINKS
     * ============================
     */

    gsap.fromTo(
      categories,
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".custom-clothing-categories",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    /*
     * ============================
     * IMAGE REVEAL
     * ============================
     */

    gsap.fromTo(
      imageWrapper,
      {
        opacity: 0,
        x: 50,
        scale: 0.96,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );

    /*
     * ============================
     * IMAGE PARALLAX
     * ============================
     */

    gsap.fromTo(
      image,
      {
        y: 35,
        scale: 1.08,
      },
      {
        y: -35,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
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
    id="custom-clothing"
    class="custom-clothing-section overflow-hidden py-20 sm:py-24 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-16 xl:px-20"
    >
      <!-- Content -->
      <div class="custom-clothing-content max-w-[700px]">
        <!-- Eyebrow -->
        <p
          class="custom-clothing-eyebrow mb-5 font-secondary text-[20px] font-bold leading-tight text-[#6b5f51] sm:text-[22px]"
        >
          Custom clothing manufacturer
        </p>

        <!-- Heading -->
        <h2
          class="custom-clothing-title max-w-[680px] font-primary text-[42px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#181818] sm:text-[50px] lg:text-[58px]"
        >
          Customized garments
          <br />
          for your customers
        </h2>

        <!-- Description -->
        <div
          class="custom-clothing-description mt-8 max-w-[680px] space-y-6 font-primary text-[18px] leading-[1.6] text-[#202020] sm:text-[20px]"
        >
          <p>
            Already for ten years, our company is manufacturing garments for
            countries all over the globe. We produce garments for The USA,
            Australia, Germany, Canada, The UK, France, Thailand, New Zealand,
            Spain, Portugal, Malaysia, The UAE, and more.
          </p>

          <p>
            In our showroom, you can find different designs of T-shirts,
            dresses, jeans, trousers, sportswear, swimwear, and more.
          </p>
        </div>

        <!-- Categories -->
        <div
          class="custom-clothing-categories mt-10 space-y-4"
        >
          <a
            v-for="category in clothingCategories"
            :key="category.title"
            href="#"
            class="custom-clothing-category group flex w-fit items-center gap-4"
          >
            <span
              class="font-primary text-[20px] font-bold text-[#6b5f51] transition-transform duration-300 group-hover:translate-x-1 sm:text-[22px]"
            >
              {{ category.title }}
            </span>

            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6b5f51] text-white transition-transform duration-300 group-hover:translate-x-1"
            >
              <Icon
                :name="category.icon"
                size="22"
                :stroke-width="2"
              />
            </span>
          </a>
        </div>
      </div>

      <!-- Image -->
      <div class="flex justify-center lg:justify-end">
        <div
          class="custom-clothing-image-wrapper relative w-full max-w-[520px] overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
        >
          <img
            src="https://loveandflair.com/cdn/shop/files/LF-100.jpg"
            alt="Custom clothing manufacturing"
            class="custom-clothing-image block aspect-[0.82] h-full w-full object-cover will-change-transform"
          />
        </div>
      </div>
    </div>
  </section>
</template>