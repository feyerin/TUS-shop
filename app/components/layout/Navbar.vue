<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const isScrolled = ref(false)
const isOpen = ref(false)
const activeMenu = ref<string | null>(null)
const activeMobileMenu = ref<number | null>(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const isActive = computed(() => {
  return (
    isScrolled.value ||
    activeMenu.value !== null ||
    route.path !== "/"
  )
})

const menu = [
  { name: "NEW", link: "/collections/NEW" },
  {
    name: "COLLECTIONS",
    link: "/collections",
    children: [
      {
        title: "TOPS",
        items: [
          { name: "T-Shirts", link: "/collections/T-Shirts" },
          { name: "Shirts", link: "/collections/Shirts" },
          { name: "Tank Tops", link: "/collections/Tank-Tops" }
        ]
      },
      {
        title: "BOTTOMS",
        items: [
          { name: "Jeans", link: "/collections/Jeans" },
          { name: "Shorts", link: "/collections/Shorts" },
          { name: "Skirts", link: "/collections/Skirts" }
        ]
      },
      {
        title: "OUTERWEAR",
        items: [
          { name: "Jackets", link: "/collections/Jackets" },
          { name: "Blazers", link: "/collections/Blazers" }
        ]
      }
    ]
  },
  { 
    name: "BRAND", 
    link: "/collections",
    children: [
      {
        title: "TOPS",
        items: [
          { name: "NIKE", link: "/collections/NIKE" },
          { name: "Adidas", link: "/collections/Adidas" },
          { name: "Rebook", link: "/collections/Rebook" }
        ]
      }
    ]
  },
  { name: "SALE", link: "/collections/SALE" }
]

const activeItem = computed(() =>
  menu.find((item) => item.name === activeMenu.value)
)

const toggleMobileMenu = (index: number) => {
  activeMobileMenu.value =
    activeMobileMenu.value === index ? null : index
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
    :class="isActive
      ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 text-black'
      : 'bg-transparent text-white'"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-4 grid grid-cols-3 items-center text-xs tracking-[0.15em]">
      
      <!-- LEFT -->
      <div class="flex items-center gap-4">
        <button @click="isOpen = true" class="md:hidden text-lg">☰</button>

        <nav class="hidden md:flex items-center gap-10">
          <div
            v-for="item in menu"
            :key="item.name"
            class="relative"
            @mouseenter="activeMenu = item.name"
          >
            <NuxtLink :to="item.link" class="hover:opacity-60">
              {{ item.name }}
            </NuxtLink>
          </div>
        </nav>
      </div>

      <!-- LOGO -->
      <div class="flex justify-center">
        <NuxtLink to="/">
          <NuxtImg
            src="https://loveandflair.com/cdn/shop/files/LFLOGO_NEW-05_e8af3c6c-d2d5-45b6-8c0b-48c2140a3f31_150x@2x.png"
            class="h-5 md:h-6"
          />
        </NuxtLink>
      </div>

      <!-- RIGHT -->
      <div class="flex justify-end gap-4 md:gap-6">
        <div class="hidden md:flex gap-6">
          <NuxtLink to="/account">JOIN US</NuxtLink>
          <NuxtLink to="/about">ABOUT</NuxtLink>
          <NuxtLink to="/contact">CONTACT US</NuxtLink>
        </div>

        <NuxtLink to="/cart" class="md:hidden">cart</NuxtLink>
      </div>
    </div>

    <!-- MEGA MENU -->
    <transition name="mega">
      <div
        v-if="activeItem?.children"
        class="absolute left-0 top-full w-full bg-white text-black border-t border-gray-100 shadow-sm"
        @mouseenter="activeMenu = activeItem.name"
        @mouseleave="activeMenu = null"
      >
        <div class="max-w-7xl mx-auto px-8 py-12">
          <div class="grid grid-cols-12 gap-10">

            <!-- LINKS -->
            <div class="col-span-9 grid grid-cols-3 gap-10 font-[200]">
              <div
                v-for="group in activeItem.children"
                :key="group.title"
                class="space-y-4"
              >
                <h4 class="text-[12px] tracking-widest text-gray-400 ">
                  {{ group.title }}
                </h4>

                <ul class="space-y-2">
                  <li v-for="child in group.items" :key="child.name">
                    <NuxtLink
                      :to="child.link"
                      class="text-xs hover:opacity-60"
                    >
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>

            <!-- IMAGE -->
            <div class="col-span-3">
              <div class="relative overflow-hidden rounded-lg group">
                <img
                  src="https://loveandflair.com/cdn/shop/collections/Screenshot_2023-12-12_at_12.03.19_AM.png?v=1774839144&width=3000"
                  class="w-full h-[220px] object-cover transition duration-500 group-hover:scale-105"
                />
                <div class="absolute bottom-3 left-3 text-white text-xs tracking-widest">
                  NEW ARRIVALS →
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>

    <!-- MOBILE OVERLAY -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 z-40"
      @click="isOpen = false"
    />

    <!-- MOBILE MENU -->
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-[80%] h-full bg-white z-50 p-6 overflow-y-auto"
    >
      <div class="flex justify-between mb-8">
        <span>MENU</span>
        <button @click="isOpen = false">✕</button>
      </div>

      <nav class="flex flex-col gap-6">
        <div v-for="(item, index) in menu" :key="item.name">
          
          <div class="flex justify-between items-center">
            <NuxtLink :to="item.link" @click="isOpen = false">
              {{ item.name }}
            </NuxtLink>

            <button
              v-if="item.children"
              @click="toggleMobileMenu(index)"
            >
              +
            </button>
          </div>

          <div
            v-if="item.children && activeMobileMenu === index"
            class="mt-3 ml-3 flex flex-col gap-3"
          >
            <div v-for="group in item.children" :key="group.title">
              <p class="text-xs font-semibold mb-2">
                {{ group.title }}
              </p>

              <NuxtLink
                v-for="child in group.items"
                :key="child.name"
                :to="child.link"
                class="block text-sm opacity-70"
                @click="isOpen = false"
              >
                {{ child.name }}
              </NuxtLink>
            </div>
          </div>

        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.mega-enter-active,
.mega-leave-active {
  transition: all 0.25s ease;
}

.mega-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.mega-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>