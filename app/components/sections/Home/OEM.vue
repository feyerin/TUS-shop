<script setup lang="ts">
const paths = [
  {
    icon: 'heroicons:tag',
    title: 'Private Label',
    subtitle: 'BUILD YOUR OWN BRAND',
    description:
      'Create a unique underwear line with your own brand, labels, and packaging.',
    features: [
      'Custom designs & materials',
      'Your brand, your way',
      'Custom labels & packaging',
      'Low MOQ options available',
    ],
    button: 'I WANT PRIVATE LABEL',
    href: '/private-label',
  },
  {
    icon: 'heroicons:shopping-bag',
    title: 'Reseller',
    subtitle: 'RESELL QUALITY UNDERWEAR',
    description:
      'Shop our ready-to-sell underwear collections and grow your business.',
    features: [
      'Ready-to-sell products',
      'Competitive wholesale prices',
      'Reliable quality & supply',
      'Fast & hassle-free ordering',
    ],
    button: 'I WANT TO RESELL',
    href: '/reseller',
  },
]

const benefits = [
  {
    icon: 'heroicons:shield-check',
    title: 'PREMIUM QUALITY',
    description: 'Carefully selected materials and strict quality control.',
  },
  {
    icon: 'heroicons:building-office-2',
    title: 'RELIABLE MANUFACTURING',
    description: 'Experienced production team and ethical manufacturing.',
  },
  {
    icon: 'heroicons:globe-alt',
    title: 'GLOBAL SHIPPING',
    description: 'Worldwide delivery with secure and timely service.',
  },
  {
    icon: 'heroicons:phone',
    title: 'DEDICATED SUPPORT',
    description: "We're here to support your business every step of the way.",
  },
]
</script>

<template>
  <main class="bg-[#f8f6f2] text-[#161616] font-primary">
    <!-- HERO -->
    <section
      class="relative min-h-[560px] overflow-hidden bg-[#171717]"
    >
      <!-- Hero image -->
      <div class="absolute inset-0">
        <NuxtImg
          src="/images/underwear-hero.jpg"
          alt="Premium underwear manufacturing"
          class="h-full w-full object-cover"
          sizes="100vw"
          format="webp"
        />

        <div
          class="absolute inset-0 bg-black/45"
        />
      </div>

      <!-- Hero content -->
      <div
        class="relative z-10 mx-auto flex min-h-[560px] max-w-[1200px] items-center justify-center px-6 py-20 text-center"
      >
        <div class="max-w-[800px]">
          <p
            class="mb-5 text-[12px] font-medium uppercase tracking-[0.3em] text-white/90 sm:text-[14px]"
          >
            THE
          </p>

          <p
            class="-mt-3 mb-8 text-[12px] uppercase tracking-[0.3em] text-white/90 sm:text-[14px]"
          >
            UNDERWEAR SUPPLY
          </p>

          <h1
            class="font-secondary italic text-[42px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] md:text-[68px]"
          >
            Premium Underwear.
            <br />
            Built for Your Brand.
          </h1>

          <p
            class="mx-auto mt-8 max-w-[580px] text-[15px] leading-7 text-white/85 sm:text-[17px]"
          >
            High-quality underwear manufacturing
            <br class="hidden sm:block" />
            for brands and entrepreneurs worldwide.
          </p>

          <div class="mx-auto mt-12 h-px w-9 bg-white/70" />

          <p
            class="mt-10 text-[11px] font-medium uppercase tracking-[0.35em] text-white/90 sm:text-[13px]"
          >
            CHOOSE YOUR PATH
          </p>
        </div>
      </div>
    </section>

    <!-- CHOOSE YOUR PATH -->
    <section class="px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <div class="mx-auto max-w-[1060px]">
        <!-- Heading -->
        <div class="mb-10 text-center sm:mb-12">
          <h2
            class="font-secondary italic text-[34px] leading-tight tracking-[-0.02em] sm:text-[42px] md:text-[46px]"
          >
            How can we support your business?
          </h2>

          <p class="mt-4 text-[14px] text-[#333] sm:text-[16px]">
            Select the option that best describes you to get started.
          </p>
        </div>

        <!-- Cards -->
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="path in paths"
            :key="path.title"
            class="flex min-h-[570px] flex-col rounded-[18px] border border-[#d9d5ce] bg-[#faf9f6] px-7 py-8 text-center sm:px-10 sm:py-9"
          >
            <!-- Icon -->
            <div
              class="mx-auto flex h-[112px] w-[112px] items-center justify-center rounded-full bg-[#eadfce]"
            >
              <Icon
                :name="path.icon"
                class="h-[54px] w-[54px] text-[#171717]"
                stroke-width="1"
              />
            </div>

            <!-- Title -->
            <h3
              class="mt-6 font-secondary italic text-[34px] leading-none tracking-[-0.02em] sm:text-[38px]"
            >
              {{ path.title }}
            </h3>

            <p
              class="mt-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#242424] sm:text-[11px]"
            >
              {{ path.subtitle }}
            </p>

            <!-- Divider -->
            <div class="mx-auto my-7 h-px w-10 bg-[#d8d3ca]" />

            <!-- Description -->
            <p
              class="mx-auto max-w-[400px] text-[14px] leading-6 text-[#292929] sm:text-[15px]"
            >
              {{ path.description }}
            </p>

            <!-- Features -->
            <ul class="mx-auto mt-6 w-full max-w-[400px] space-y-3 text-left">
              <li
                v-for="feature in path.features"
                :key="feature"
                class="flex items-center gap-3 text-[13px] text-[#292929] sm:text-[14px]"
              >
                <span
                  class="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#dfcfb9]"
                >
                  <Icon
                    name="heroicons:check"
                    class="h-3 w-3 text-white"
                    stroke-width="2.5"
                  />
                </span>

                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Button -->
            <div class="mt-auto pt-8">
              <NuxtLink
                :to="path.href"
                class="flex h-[58px]  w-full items-center justify-center rounded-[9px] bg-[#151515] px-5 text-[12px] font-semibold tracking-[0.03em] text-white transition-all duration-300 hover:bg-[#333]"
              >
                {{ path.button }}
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- BENEFITS -->
    <section
      class="border-t border-[#e2ded7] bg-[#f1eee8] px-5 py-10 sm:px-8 sm:py-12"
    >
      <div
        class="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4"
      >
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          class="relative flex flex-col items-center px-5 py-5 text-center md:py-2"
        >
          <!-- Vertical divider -->
          <div
            v-if="index !== 0"
            class="absolute left-0 top-1/2 hidden h-[70px] -translate-y-1/2 border-l border-[#d6d1c8] md:block"
          />

          <Icon
            :name="benefit.icon"
            class="h-[40px] w-[40px] text-[#242424]"
            stroke-width="1"
          />

          <h4
            class="mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[11px]"
          >
            {{ benefit.title }}
          </h4>

          <p
            class="mt-2 max-w-[190px] text-[11px] leading-5 text-[#444] sm:text-[12px]"
          >
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>