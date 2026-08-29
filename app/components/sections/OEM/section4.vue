<script setup lang="ts">
interface Service {
  title: string;
}

const services: Service[] = [
  {
    title: "OEM Garment Manufacturing",
  },
  {
    title: "ODM Garment Manufacturing",
  },
  {
    title: "Fabric Sourcing",
  },
  {
    title: "Garment Accessories Sourcing",
  },
];

const collectionOptions = [
  {
    label: "YES!",
    icon: "lucide:check",
  },
  {
    label: "Not yet",
    icon: "lucide:x",
  },
];
</script>

<template>
  <section
    id="services"
    class="py-20 sm:py-24 lg:py-32"
  >
    <div
      class="mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16 xl:px-20"
    >
      <!-- Left Content -->
      <div class="max-w-[620px]">
        <p
          class="mb-5 font-primary text-[20px] font-bold leading-tight text-[#EF4B1A] sm:text-[22px]"
        >
          Services
        </p>

        <h2
          class="max-w-[580px] font-primary text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#181818] sm:text-[50px] lg:text-[58px]"
        >
          We are here to bring
          <br />
          your ideas to life
        </h2>

        <!-- Service List -->
        <div
          class="mt-8 rounded-[16px] border border-[#E3E3E3] bg-white p-6 sm:p-7"
        >
          <ul class="space-y-5">
            <li
              v-for="service in services"
              :key="service.title"
              class="flex items-center gap-4"
            >
              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EF4B1A]"
              >
                <Icon
                  name="lucide:check"
                  size="17"
                  :stroke-width="3"
                  class="text-white"
                />
              </span>

              <span
                class="font-primary text-[17px] font-medium text-[#30303A] sm:text-[19px]"
              >
                {{ service.title }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="relative min-h-[500px] lg:min-h-[620px]">
        <!-- Main Image -->
        <div
          class="absolute right-0 top-1/2 w-full max-w-[760px] -translate-y-1/2 overflow-hidden rounded-[24px]"
        >
          <img
            src="https://loveandflair.com/cdn/shop/files/LF-100.jpg"
            alt="Fashion design and garment manufacturing"
            class="aspect-[1.45] h-full w-full object-cover"
          />
        </div>

        <!-- Floating Card -->
        <div
          class="relative z-10 flex w-full max-w-[390px] flex-col rounded-[16px] bg-[#202A50] px-8 py-10 shadow-[0_20px_45px_rgba(0,0,0,0.18)] sm:px-10 sm:py-12 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
        >
          <h3
            class="font-primary text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[38px]"
          >
            Have you already designed a new mind-blowing collection?
          </h3>

          <!-- Options -->
          <div class="mt-8 space-y-4">
            <button
              v-for="option in collectionOptions"
              :key="option.label"
              type="button"
              class="flex w-full items-center justify-between rounded-[10px] bg-[#89A79D] px-6 py-4 font-primary text-[18px] font-bold text-white transition-all duration-300 hover:translate-x-1 hover:bg-[#7D9B92]"
            >
              <span>{{ option.label }}</span>

              <Icon
                :name="option.icon"
                size="26"
                :stroke-width="2.5"
              />
            </button>
          </div>

          <!-- More Details -->
          <button
            type="button"
            class="mt-8 flex items-center justify-center gap-2 font-primary text-[18px] font-bold text-white transition-all duration-300 hover:gap-3"
          >
            <span>More Details</span>

            <Icon
              name="lucide:arrow-right"
              size="22"
              :stroke-width="2"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>