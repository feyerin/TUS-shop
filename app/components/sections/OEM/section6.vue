<script setup lang="ts">
interface ProductionStep {
  number: number
  title: string
  icon: string
}

const steps: ProductionStep[] = [
  {
    number: 1,
    title: 'Contact',
    icon: 'lucide:message-circle',
  },
  {
    number: 2,
    title: 'Designs',
    icon: 'lucide:pen-tool',
  },
  {
    number: 3,
    title: 'Materials',
    icon: 'lucide:layers',
  },
  {
    number: 4,
    title: 'Samples',
    icon: 'lucide:scissors',
  },
  {
    number: 5,
    title: 'Production',
    icon: 'lucide:factory',
  },
  {
    number: 6,
    title: 'Delivery',
    icon: 'lucide:truck',
  },
]
</script>

<template>
  <section class="w-full bg-[#faf9f7] py-16 md:py-20 lg:py-28">
    <div
      class="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-6 md:px-10 lg:flex-row lg:gap-16 xl:px-0"
    >
      <!-- LEFT -->
      <div class="w-full lg:w-[48%]">
        <p
          class="mb-5 text-[18px] font-semibold leading-[1.2] text-[#86a99f] md:text-[20px]"
        >
          ODM Clothing Production
        </p>

        <h2
          class="max-w-[600px] text-[44px] font-bold leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-[56px] lg:text-[58px] xl:text-[64px]"
        >
          Do you have<br class="hidden md:block" />
          designs to<br class="hidden md:block" />
          manufacture?<br class="hidden md:block" />
          Alamby Fashion is<br class="hidden md:block" />
          your answer!
        </h2>
      </div>

      <!-- RIGHT -->
      <div class="w-full max-w-[480px] lg:w-[52%] lg:max-w-[470px]">
        <div
          class="rounded-[14px] bg-[#2d385f] px-7 pb-7 pt-5"
        >
          <!-- STEPS -->
          <div
            class="grid grid-cols-3 gap-4 rounded-[12px] border border-[#3b3b3b] bg-[#faf7ef] p-4 md:gap-5 md:p-5"
            >
            <div
                v-for="step in steps"
                :key="step.number"
                class="group relative aspect-square overflow-hidden rounded-[18px] bg-[#343434] shadow-[0_3px_7px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1"
            >
                <!-- OVERLAY -->
                <div
                class="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0"
                />

                <!-- NUMBER -->
                <span
                class="absolute left-2.5 top-2 z-10 text-[22px] font-light leading-none text-white md:left-3 md:top-2.5 md:text-[26px]"
                >
                {{ step.number }}
                </span>

                <!-- ICON + TITLE -->
                <div
                class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 px-1 pt-3"
                >
                <Icon
                    :name="step.icon"
                    class="size-7 text-white md:size-9"
                    stroke-width="1.5"
                />

                <span
                    class="text-center text-[13px] font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-[16px]"
                >
                    {{ step.title }}
                </span>
                </div>
            </div>
          </div>

          <!-- CONTENT -->
          <div
            class="mt-0 rounded-b-[12px] bg-white px-7 py-7 md:px-10 md:py-9"
          >
            <p
              class="mb-3 text-[17px] font-semibold leading-[1.2] text-[#86a99f] md:text-[19px]"
            >
              Produce with us in
            </p>

            <h3
              class="mb-3 text-[34px] font-bold leading-[1] tracking-[-0.04em] text-[#363744] md:text-[42px]"
            >
              6 easy steps
            </h3>

            <p
              class="max-w-[350px] text-[16px] leading-[1.45] text-[#363744] md:text-[17px]"
            >
              The process is simple and our team will guide you through each
              step.
            </p>
          </div>

          <!-- CTA -->
          <button
            type="button"
            class="mx-auto mt-7 flex items-center gap-2 text-[17px] font-semibold text-white transition-opacity hover:opacity-75"
          >
            <span>More Details</span>
            <Icon
              name="lucide:arrow-right"
              class="size-5"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>