<script setup lang="ts">
interface ServiceItem {
  title: string;
  icon: string;
  iconBg: string;
  textColor: string;
}

const services: ServiceItem[] = [
  {
    title: "Garment Manufacturing",
    icon: "lucide:briefcase-business",
    iconBg: "bg-[#6b5f51]",
    textColor: "text-[#6b5f51]",
  },
  {
    title: "Stock Fabric & Clothing",
    icon: "lucide:shopping-bag",
    iconBg: "bg-[#202A50]",
    textColor: "text-[#202A50]",
  },
  {
    title: "Wholesale Markets in China",
    icon: "lucide:shirt",
    iconBg: "bg-[#89A79D]",
    textColor: "text-[#89A79D]",
  },
  {
    title: "Get In Touch",
    icon: "lucide:send",
    iconBg: "bg-[#292A34]",
    textColor: "text-[#292A34]",
  },
];

const backgroundImages = [
  "/image/bg/oem.jpeg",
  "/image/bg/oem-2.jpg",
];

let animationContext: gsap.Context | null = null;

onMounted(async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  animationContext = gsap.context(() => {
    const section = document.querySelector(".oem-hero");

    if (!section) return;

    const line = section.querySelector(".oem-line");
    const content = section.querySelector(".oem-content");
    const description = section.querySelector(".oem-description");
    const cards = section.querySelectorAll(".oem-service-card");
    const icons = section.querySelectorAll(".oem-service-icon");
    const backgrounds = section.querySelectorAll(".oem-background");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * ============================
     * BACKGROUND SLIDESHOW
     * ============================
     */

    if (!reduceMotion && backgrounds.length > 1) {
      const backgroundElements = Array.from(backgrounds);

      let currentIndex = 0;

      // Initial state
      gsap.set(backgroundElements, {
        opacity: 0,
        scale: 1,
      });

      const firstBackground = backgroundElements[0];

      if (firstBackground) {
        gsap.set(firstBackground, {
          opacity: 1,
          scale: 1.05,
        });
      }

      const showNextBackground = () => {
        const current = backgroundElements[currentIndex];

        if (!current) return;

        currentIndex = (currentIndex + 1) % backgroundElements.length;

        const next = backgroundElements[currentIndex];

        if (!next) return;

        const timeline = gsap.timeline();

        // Current image slowly zooms
        timeline.to(current, {
          scale: 1.12,
          duration: 6,
          ease: "none",
        });

        // Next image fades + zooms in
        timeline.fromTo(
          next,
          {
            opacity: 0,
            scale: 1.12,
          },
          {
            opacity: 1,
            scale: 1.05,
            duration: 2,
            ease: "power2.inOut",
          },
          "-=2",
        );

        // Current image fades out
        timeline.to(
          current,
          {
            opacity: 0,
            duration: 2,
            ease: "power2.inOut",
          },
          "<",
        );

        // Next slide
        timeline.call(showNextBackground, undefined, "+=2");
      };

      // Start slideshow after first image has been displayed
      gsap.delayedCall(5, showNextBackground);
    }

    /*
     * ============================
     * REDUCED MOTION
     * ============================
     */

    if (reduceMotion) {
      gsap.set(
        [line, content, description, cards, icons],
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

    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Line
    introTimeline.fromTo(
      line,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    // Heading
    introTimeline.fromTo(
      content,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.45",
    );

    // Description
    introTimeline.fromTo(
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
      "-=0.55",
    );

    /*
     * ============================
     * SERVICE CARDS
     * ============================
     */

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".oem-services",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      },
    );

    /*
     * ============================
     * ICONS
     * ============================
     */

    gsap.fromTo(
      icons,
      {
        opacity: 0,
        scale: 0.75,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".oem-services",
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
    id="oem"
    class="oem-hero font-primary relative min-h-[830px] overflow-hidden"
  >
    <!-- Background Slideshow -->
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        v-for="(image, index) in backgroundImages"
        :key="image"
        :src="image"
        alt=""
        class="oem-background absolute inset-0 h-full w-full object-cover object-center"
        :class="index === 0 ? 'opacity-100' : 'opacity-0'"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/35" />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 mx-auto flex min-h-[830px] max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20"
    >
      <div
        class="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
      >
        <!-- Content -->
        <div class="oem-content max-w-[620px]">
          <!-- Brand Logo -->
            <div class="oem-logo mb-8 inline-flex rounded-md bg-white p-3">
              <img
                src="/image/logo/tus.PNG"
                alt="The Underwear Supply"
                class="h-auto w-[150px] object-contain object-left sm:w-[180px]"
              />
            </div>

          <div
            class="oem-line mb-8 h-[3px] w-[350px] max-w-full bg-white sm:mb-10"
          />

          <h1
            class="text-[42px] font-primary font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[58px] xl:text-[64px]"
          >
            We manufacture
            <br />
            clothing and help
            <br />
            your customers
            <br />
            look
            <span class="whitespace-nowrap">STUNNING!</span>
          </h1>

          <p
            class="oem-description font-secondary mt-8 max-w-[570px] text-[20px] leading-[1.5] text-white sm:text-[22px]"
          >
            Garment Manufacturer in China for brands that prefer quality.
          </p>
        </div>

        <!-- Services -->
        <div
          class="oem-services grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        >
          <button
            v-for="service in services"
            :key="service.title"
            type="button"
            class="oem-service-card group flex min-h-[190px] flex-col items-center justify-center rounded-[14px] bg-white px-6 py-8 text-center opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div
              :class="[
                'oem-service-icon mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105',
                service.iconBg,
              ]"
            >
              <Icon
                :name="service.icon"
                size="42"
                :stroke-width="1.8"
                class="text-white"
              />
            </div>

            <span
              :class="[
                'text-[19px] font-bold leading-tight sm:text-[20px]',
                service.textColor,
              ]"
            >
              {{ service.title }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>