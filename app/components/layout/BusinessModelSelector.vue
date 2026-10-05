<script setup lang="ts">
interface BusinessOption {
  type: 'OEM' | 'ODM'
  eyebrow: string
  title: string
  description: string
  features: string[]
  href: string
}

const businessOptions: BusinessOption[] = [
  {
    type: 'OEM',
    eyebrow: 'BUILD YOUR BRAND',
    title: 'OEM',
    description:
      'Bring your own vision to life with custom designs, materials, labels, and packaging made specifically for your brand.',
    features: [
      'Custom designs & materials',
      'Your own branding',
      'Custom labels & packaging',
      'Flexible MOQ options'
    ],
    href: '/oem'
  },
  {
    type: 'ODM',
    eyebrow: 'READY TO BUILD',
    title: 'ODM',
    description:
      'Explore our curated product collection and build your business with ready-to-sell styles from our marketplace.',
    features: [
      'Ready-to-sell products',
      'Curated collections',
      'Competitive wholesale pricing',
      'Fast & simple ordering'
    ],
    href: '/home'
  }
]

const benefits = [
  {
    number: '01',
    title: 'Premium Quality',
    description: 'Carefully selected materials and strict quality control.'
  },
  {
    number: '02',
    title: 'Reliable Production',
    description: 'Experienced production teams and consistent manufacturing.'
  },
  {
    number: '03',
    title: 'Global Supply',
    description: 'Reliable shipping and supply solutions for growing brands.'
  },
  {
    number: '04',
    title: 'Dedicated Support',
    description: 'Our team is here to support your business every step.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#f8f7f3] text-[#171717]">
    <!-- Header -->
    <header
      class="flex h-[72px] items-center justify-between border-b border-[#e7e4de] bg-white/90 px-6 md:px-12"
    >
        <!-- Header -->
        <NuxtLink
        to="/"
        class="block w-fit"
        >
        <img
            src="/image/logo/tus.PNG"
            alt="The Underwear Supply"
            class="h-auto w-[140px] object-contain"
        />
        </NuxtLink>
    </header>

    <main>
        <!-- Hero -->
        <section
            class="px-5 pb-12 pt-20 text-center md:pb-14 md:pt-24"
        >
            <div class="mx-auto max-w-[760px]">
            <p
                class="mb-5 text-[9px] font-bold uppercase tracking-[0.28em] text-[#8b877f] md:text-[10px]"
            >
                Welcome to our business platform
            </p>

            <h1
                class="m-0 text-[42px] font-normal leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-[64px]"
            >
                How would you like
                <br />
                <em class="font-serif font-normal not-italic">
                to grow your brand?
                </em>
            </h1>

            <p
                class="mx-auto mt-7 max-w-[530px] text-[13px] leading-7 text-[#66635d] md:text-[15px]"
            >
                Choose the solution that fits your business.
                Build something uniquely yours or start selling
                with our ready-to-go collection.
            </p>
            </div>
        </section>

        <!-- OEM / ODM -->
        <section
            class="px-4 pb-20 md:px-6 md:pb-24 lg:px-12"
        >
            <div
            class="mx-auto grid max-w-[1160px] grid-cols-1 gap-5 lg:grid-cols-2"
            >
            <NuxtLink
                v-for="option in businessOptions"
                :key="option.type"
                :to="option.href"
                class="group relative flex min-h-[620px] flex-col overflow-hidden rounded-[4px] border border-[#dedbd5] p-6 text-[#181818] no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c7c2b9] hover:shadow-[0_20px_50px_rgba(35,32,26,0.08)] md:p-8"
                :class="
                option.type === 'OEM'
                    ? 'bg-[#f2eee6]'
                    : 'bg-white'
                "
            >
                <!-- Card Header -->
                <div class="flex items-center justify-between">
                <span
                    class="text-[9px] font-bold tracking-[0.2em] text-[#9b968d]"
                >
                    {{ option.type === 'OEM' ? '01' : '02' }}
                </span>

                <span
                    class="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d2ca] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#171717] group-hover:text-white"
                >
                    <svg
                    class="h-[17px] w-[17px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    >
                    <path
                        d="M5 19L19 5M19 5H8M19 5V16"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </svg>
                </span>
                </div>

                <!-- Visual -->
                <div
                class="flex h-[145px] items-center justify-center md:h-[180px]"
                >
                <div
                    class="flex h-[105px] w-[105px] items-center justify-center rounded-full bg-[#e4dac7] transition-transform duration-500 group-hover:scale-105 md:h-[126px] md:w-[126px]"
                >
                    <!-- OEM -->
                    <svg
                    v-if="option.type === 'OEM'"
                    class="h-[52px] w-[52px] md:h-[62px] md:w-[62px]"
                    viewBox="0 0 64 64"
                    fill="none"
                    >
                    <path
                        d="M20 10L10 20L18 28L23 23V48C23 51.3 25.7 54 29 54H47C50.3 54 53 51.3 53 48V16C53 12.7 50.3 10 47 10H20Z"
                        stroke="currentColor"
                        stroke-width="2"
                    />

                    <circle
                        cx="20"
                        cy="20"
                        r="2"
                        fill="currentColor"
                    />
                    </svg>

                    <!-- ODM -->
                    <svg
                    v-else
                    class="h-[52px] w-[52px] md:h-[62px] md:w-[62px]"
                    viewBox="0 0 64 64"
                    fill="none"
                    >
                    <path
                        d="M18 22H46L49 53H15L18 22Z"
                        stroke="currentColor"
                        stroke-width="2"
                    />

                    <path
                        d="M24 23V17C24 12.6 27.6 9 32 9C36.4 9 40 12.6 40 17V23"
                        stroke="currentColor"
                        stroke-width="2"
                    />
                    </svg>
                </div>
                </div>

                <!-- Content -->
                <div class="flex flex-1 flex-col items-center text-center">
                <p
                    class="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#777168]"
                >
                    {{ option.eyebrow }}
                </p>

                <h2
                    class="m-0 font-serif text-[38px] font-normal italic leading-none tracking-[-0.04em] md:text-[43px]"
                >
                    {{ option.title }}
                </h2>

                <div
                    class="my-5 h-px w-[42px] bg-[#cfc9bf]"
                />

                <p
                    class="m-0 max-w-[460px] text-[13px] leading-7 text-[#5e5b55] md:text-sm"
                >
                    {{ option.description }}
                </p>

                <!-- Features -->
                <ul
                    class="mx-auto mt-6 grid w-full max-w-[400px] gap-2.5 p-0 text-left"
                >
                    <li
                    v-for="feature in option.features"
                    :key="feature"
                    class="flex items-center gap-2.5 text-[12px] text-[#34322e]"
                    >
                    <span
                        class="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#ded2bd]"
                    >
                        <svg
                        class="h-2.5 w-2.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        >
                        <path
                            d="M2 6L5 9L10 3"
                            stroke="currentColor"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                    </span>

                    <span>
                        {{ feature }}
                    </span>
                    </li>
                </ul>
                </div>

                <!-- CTA -->
                <div
                class="mt-7 flex min-h-[56px] items-center justify-between rounded-[3px] bg-[#181818] px-5 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition-colors duration-300 group-hover:bg-[#35332f]"
                >
                <span>
                    Explore {{ option.type }}
                </span>

                <svg
                    class="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
                </div>
            </NuxtLink>
            </div>
        </section>

        <!-- Benefits -->
        <section
        class="border-y border-[#dedbd4] bg-[#efede7] px-6 py-12 md:px-12 md:py-14"
        >
        <div
            class="mx-auto grid max-w-[1160px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
            <div
            v-for="(benefit, index) in benefits"
            :key="benefit.number"
            class="flex min-h-[95px] flex-col justify-center border-b border-[#d7d3ca] py-6 md:px-6 md:py-0 lg:border-b-0 lg:border-r"
            :class="{
                'md:pl-0': index === 0,
                'md:pr-8': index === 0 || index === 2,
                'md:border-r-0 lg:border-r': index === 1,
                'border-b-0 lg:border-r-0 lg:pr-0': index === 3
            }"
            >
            <span
                class="mb-3 text-[9px] font-bold tracking-[0.15em] text-[#aaa49a]"
            >
                {{ benefit.number }}
            </span>

            <h3
                class="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
            >
                {{ benefit.title }}
            </h3>

            <p
                class="m-0 max-w-[190px] text-[11px] leading-6 text-[#68645d]"
            >
                {{ benefit.description }}
            </p>
            </div>
        </div>
        </section>

        <!-- Bottom Statement -->
        <section
            class="px-6 pb-24 pt-20 text-center md:pb-28 md:pt-24"
        >
            <p
            class="mb-5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#8b877f]"
            >
            Made for your business
            </p>

            <h2
            class="m-0 text-[36px] font-normal leading-tight tracking-[-0.05em] md:text-[52px]"
            >
            From your first idea
            <br />

            <em class="font-serif font-normal italic">
                to your next collection.
            </em>
            </h2>
        </section>
    </main>
  </div>
</template>