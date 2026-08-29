<script setup lang="ts">
const collection = {
  eyebrow: "OEM Clothing Production",
  title: "Our clothing collection",
  highlight: "for women, men, girls, boys, and babies!",
  description:
    "In our showroom, hundreds of garments are ready to inspire and help you find unique designs that can make your customers look stunning.",
  question: "Basic or modern designs? Contemporary fashion?",
  footer:
    "Almost all kinds of designs you can find and manufacture in Alamby Fashion.",
};
</script>

<template>
  <section
    id="collection"
    class="py-20 sm:py-24 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-[1440px] items-stretch px-6 sm:px-10 lg:grid-cols-2 lg:px-16 xl:px-20"
    >
      <!-- Image -->
      <div
        class="min-h-[500px] overflow-hidden sm:min-h-[600px] lg:min-h-[760px]"
      >
        <img
          src="https://loveandflair.com/cdn/shop/files/LF-100.jpg"
          alt="Alamby Fashion clothing collection"
          class="h-full w-full object-cover"
        />
      </div>

      <!-- Content -->
      <div
        class="flex items-center px-0 py-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
      >
        <div class="max-w-[600px]">
          <!-- Eyebrow -->
          <p
            class="mb-5 font-primary text-[20px] font-bold leading-tight text-[#89A79D] sm:text-[22px]"
          >
            {{ collection.eyebrow }}
          </p>

          <!-- Heading -->
          <h2
            class="font-primary text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#181818] sm:text-[50px] lg:text-[54px]"
          >
            {{ collection.title }}
          </h2>

          <!-- Highlight -->
          <p
            class="mt-5 font-primary text-[21px] font-medium leading-[1.45] text-[#181818] sm:text-[23px]"
          >
            for
            <span class="font-bold text-[#EF4B1A]">women</span>,
            <span class="font-bold text-[#EF4B1A]">men</span>,
            <span class="font-bold text-[#EF4B1A]">girls</span>,
            <span class="font-bold text-[#EF4B1A]">boys</span>,
            and
            <span class="font-bold text-[#EF4B1A]">babies!</span>
          </p>

          <!-- Description -->
          <p
            class="mt-10 font-primary text-[18px] leading-[1.7] text-[#252525] sm:text-[20px]"
          >
            {{ collection.description }}
          </p>

          <!-- Question -->
          <p
            class="mt-8 font-secondary text-[25px] font-semibold italic leading-[1.3] text-[#252525] sm:text-[28px]"
          >
            {{ collection.question }}
          </p>

          <!-- Footer -->
          <p
            class="mt-8 font-primary text-[18px] leading-[1.7] text-[#252525] sm:text-[20px]"
          >
            {{ collection.footer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>