<script setup lang="ts">
interface MaterialCategory {
  name: string;
  active: boolean;
}

const materialCategories: MaterialCategory[] = [
  {
    name: "Animal fibres",
    active: true,
  },
  {
    name: "Plant fibres",
    active: false,
  },
  {
    name: "Natural polymers",
    active: true,
  },
  {
    name: "Synthetic polymers",
    active: false,
  },
];

const material = {
  title: "Natural fibres",
  subtitle: "(protein-based)",
  description: "Wool, Mohair, Cashmere, Alpaca, Angora, Silk, etc.",
};
</script>

<template>
  <section
    id="materials"
    class="overflow-hidden py-20 sm:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
      <!-- Header -->
      <div class="mx-auto max-w-[850px] text-center">
        <p
          class="font-primary text-[20px] font-bold leading-tight text-[#6b5f51] sm:text-[22px]"
        >
          Sourcing fabrics and garment accessories
        </p>

        <h2
          class="mt-5 font-primary text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#181818] sm:text-[48px] lg:text-[54px]"
        >
          Through the years we've built a rich network of material suppliers
        </h2>
      </div>

      <!-- Description -->
      <div class="mx-auto mt-10 max-w-[1120px]">
        <p
          class="font-primary text-[18px] leading-[1.7] text-[#252525] sm:text-[20px]"
        >
          Does your project need wholesale fabrics, clothing, or garment
          accessories? Chinese markets have millions of material options for
          any project! Alamby Fashion will find you the right fabrics and
          garment accessories! We can offer you
          <span class="font-bold text-[#6b5f51]">
            free fabric swatches*
          </span>
          or
          <span class="font-bold text-[#6b5f51]">
            free garment accessory samples*
          </span>
        </p>
      </div>

      <!-- Materials Content -->
      <div
        class="relative mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20"
      >
        <!-- Categories -->
        <div class="relative">
          <!-- Decorative background -->
          <div
            class="pointer-events-none absolute -inset-8 -z-10 opacity-50"
            aria-hidden="true"
          >
            <div
              class="h-full w-full bg-[radial-gradient(#6b5f51_1px,transparent_1px)] [background-size:8px_8px]"
            />
          </div>

          <div class="space-y-2">
            <button
              v-for="category in materialCategories"
              :key="category.name"
              type="button"
              class="block font-primary text-left text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] transition-all duration-300 sm:text-[44px]"
              :class="
                category.active
                  ? 'text-[#181818] hover:text-[#6b5f51]'
                  : 'text-[#BEBEBE] hover:text-[#181818]'
              "
            >
              {{ category.name }}
            </button>
          </div>

          <!-- Disclaimer -->
          <div
            class="mt-12 max-w-[380px] rounded-[12px] bg-[#F5F4F2] px-4 py-4"
          >
            <p
              class="font-primary text-[12px] leading-[1.6] text-[#333333]"
            >
              *free: Accessory samples and fabric swatches. Unless they are
              custom-made, oversized, or specific. Shipping fees are not free
              of charge.
            </p>
          </div>
        </div>

        <!-- Visual / Card -->
        <div class="relative min-h-[560px]">
          <!-- Fabric Image -->
          <div
            class="absolute right-0 top-0 w-[72%] overflow-hidden rounded-[4px] shadow-[0_16px_35px_rgba(0,0,0,0.12)]"
          >
            <img
              src="https://adm1n2026.alambystyle.com/uploads/temp_Image_I_Uxmi_H_138d1406ae.jpg"
              alt="Fabric material"
              class="aspect-[1.1] w-full object-cover"
            />
          </div>

          <!-- Material Card -->
          <div
            class="absolute bottom-0 left-0 z-10 w-[70%] max-w-[430px] rounded-[16px] bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:p-8"
          >
            <!-- Icon -->
            <div
              class="flex h-16 w-16 items-center justify-center rounded-full bg-[#6b5f51]"
            >
              <Icon
                name="lucide:layers"
                size="30"
                :stroke-width="1.8"
                class="text-white"
              />
            </div>

            <!-- Title -->
            <h3
              class="mt-8 font-primary text-[28px] font-extrabold leading-[1.05] text-[#6b5f51] sm:text-[32px]"
            >
              {{ material.title }}
              <br />
              {{ material.subtitle }}
            </h3>

            <!-- Description -->
            <p
              class="mt-5 font-primary text-[16px] leading-[1.6] text-[#30303A] sm:text-[17px]"
            >
              {{ material.description }}
            </p>

            <!-- Button -->
            <button
              type="button"
              class="mt-7 inline-flex items-center gap-2 rounded-[8px] bg-[#6b5f51] px-6 py-3 font-primary text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94114]"
            >
              Check more

              <Icon
                name="lucide:arrow-right"
                size="18"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>