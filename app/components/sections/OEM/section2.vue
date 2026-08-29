<script setup lang="ts">
const aboutContent = {
  eyebrow: "Manufacturing, Sourcing, and Guidance in China!",
  title: "Alamby Fashion is a garment manufacturer",
  description:
    "Easy communication with a responsible supplier gives you time to focus on",
  emphasis: "growing your brand!",
};
</script>

<template>
  <section
    id="about"
    class="bg-[#F9F8F6] py-20 sm:py-24 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 xl:px-20"
    >
      <!-- Image -->
      <div class="flex justify-center lg:justify-start">
        <div
          class="relative w-full max-w-[470px] overflow-hidden rounded-[20px]"
        >
          <img
            src="https://loveandflair.com/cdn/shop/files/LF-100.jpg"
            alt="Sofia from Alamby Fashion"
            class="block h-auto w-full object-cover"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-[650px]">
        <p
          class="mb-6 font-secondary text-[20px] font-bold leading-tight text-[#6b5f51] sm:text-[22px]"
        >
          {{ aboutContent.eyebrow }}
        </p>

        <h2
          class="max-w-[620px] font-primary text-[44px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#181818] sm:text-[52px] lg:text-[58px]"
        >
          {{ aboutContent.title }}
        </h2>

        <p
          class="mt-8 max-w-[610px] font-primary text-[20px] leading-[1.55] text-[#202020] sm:text-[22px]"
        >
          {{ aboutContent.description }}
          <strong class="font-secondary italic text-[28px] font-bold leading-none">
            {{ aboutContent.emphasis }}
          </strong>
        </p>
      </div>
    </div>
  </section>
</template>