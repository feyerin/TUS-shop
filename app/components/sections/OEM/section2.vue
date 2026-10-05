<script setup lang="ts">
const aboutContent = {
  eyebrow: "Manufacturing, Sourcing, and Guidance in China!",
  title: "Alamby Fashion is a garment manufacturer",
  description:
    "Easy communication with a responsible supplier gives you time to focus on",
  emphasis: "growing your brand!",
};

let animationContext: gsap.Context | null = null;

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  animationContext = gsap.context(() => {
    const section = document.querySelector(".about-section");

    if (!section) return;

    const imageWrapper = section.querySelector(".about-image-wrapper");
    const image = section.querySelector(".about-image");
    const eyebrow = section.querySelector(".about-eyebrow");
    const title = section.querySelector(".about-title");
    const description = section.querySelector(".about-description");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * Reduced motion
     */
    if (reduceMotion) {
      gsap.set(
        [imageWrapper, image, eyebrow, title, description],
        {
          clearProps: "all",
        },
      );

      return;
    }

    /*
     * Image reveal
     */
    gsap.fromTo(
      imageWrapper,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );

    /*
     * Image scale
     */
    gsap.fromTo(
      image,
      {
        scale: 1.12,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );

    /*
     * Image parallax
     */
    gsap.to(image, {
      y: -45,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    /*
     * Content animation
     */
    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
        toggleActions: "play none none reverse",
      },
    });

    contentTimeline.fromTo(
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
      "-=0.4",
    );

    contentTimeline.fromTo(
      description,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5",
    );
  });
});

onUnmounted(() => {
  animationContext?.revert();
});
</script>

<template>
  <section
    id="about"
    class="about-section overflow-hidden bg-[#F9F8F6] py-20 sm:py-24 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 xl:px-20"
    >
      <!-- Image -->
      <div class="flex justify-center lg:justify-start">
        <div
          class="about-image-wrapper relative w-full max-w-[470px] overflow-hidden rounded-[20px] opacity-0"
        >
          <img
            src="https://loveandflair.com/cdn/shop/files/LF-100.jpg"
            alt="Sofia from Alamby Fashion"
            class="about-image block h-auto w-full object-cover will-change-transform"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-[650px]">
        <p
          class="about-eyebrow mb-6 font-secondary text-[20px] font-bold leading-tight text-[#6b5f51] sm:text-[22px]"
        >
          {{ aboutContent.eyebrow }}
        </p>

        <h2
          class="about-title max-w-[620px] font-primary text-[44px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#181818] sm:text-[52px] lg:text-[58px]"
        >
          {{ aboutContent.title }}
        </h2>

        <p
          class="about-description mt-8 max-w-[610px] font-primary text-[20px] leading-[1.55] text-[#202020] sm:text-[22px]"
        >
          {{ aboutContent.description }}

          <strong
            class="font-secondary text-[28px] font-bold italic leading-none"
          >
            {{ aboutContent.emphasis }}
          </strong>
        </p>
      </div>
    </div>
  </section>
</template>