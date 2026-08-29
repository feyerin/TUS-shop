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
</script>

<template>
  <section
    id="custom-clothing"
    class="py-20 sm:py-24 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-16 xl:px-20"
    >
      <!-- Content -->
      <div class="max-w-[700px]">
        <!-- Eyebrow -->
        <p
          class="mb-5 font-secondary text-[20px] font-bold leading-tight text-[#6b5f51] sm:text-[22px]"
        >
          Custom clothing manufacturer
        </p>

        <!-- Heading -->
        <h2
          class="max-w-[680px] font-primary text-[42px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#181818] sm:text-[50px] lg:text-[58px]"
        >
          Customized garments
          <br />
          for your customers
        </h2>

        <!-- Description -->
        <div
          class="mt-8 max-w-[680px] space-y-6 font-primary text-[18px] leading-[1.6] text-[#202020] sm:text-[20px]"
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
        <div class="mt-10 space-y-4">
          <a
            v-for="category in clothingCategories"
            :key="category.title"
            href="#"
            class="group flex w-fit items-center gap-4"
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
          class="w-full max-w-[520px] overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
        >
          <img
            src="https://loveandflair.com/cdn/shop/files/LF-100.jpg"
            alt="Custom clothing manufacturing"
            class="block aspect-[0.82] h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>