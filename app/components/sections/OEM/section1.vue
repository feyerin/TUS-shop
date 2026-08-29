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
    iconBg: "bg-[#EF4B1A]",
    textColor: "text-[#EF4B1A]",
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
</script>

<template>
  <section
    id="oem"
    class="font-primary relative min-h-[830px] overflow-hidden bg-[#9b9289]"
  >
    <div
      class="mx-auto flex min-h-[830px] max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20"
    >
      <div
        class="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
      >
        <!-- Content -->
        <div class="max-w-[620px]">
          <div
            class="mb-8 h-[3px] w-[350px] max-w-full bg-white sm:mb-10"
          />

          <h1
            class="text-[42px] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[58px] xl:text-[64px]"
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
            class="font-secondary mt-8 max-w-[570px] text-[20px] leading-[1.5] text-white sm:text-[22px]"
          >
            Garment Manufacturer in China for brands that prefer quality.
          </p>
        </div>

        <!-- Services -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <button
            v-for="service in services"
            :key="service.title"
            type="button"
            class="group flex min-h-[190px] flex-col items-center justify-center rounded-[14px] bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <div
              :class="[
                'mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105',
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