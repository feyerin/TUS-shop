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

const transparentRoutes = ["/", "/account/login"]

const isActive = computed(() => {
  const isTransparentPage = transparentRoutes.includes(route.path)

  if (isTransparentPage) {
    return isScrolled.value || activeMenu.value !== null
  }

  return true
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
        title: "BRANDS",
        items: [
          { name: "NIKE", link: "/collections/NIKE" },
          { name: "Adidas", link: "/collections/Adidas" },
          { name: "Reebok", link: "/collections/Reebok" }
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
    class="fixed top-0 left-0 w-full z-[9999] transition-all duration-300"
    :class="isActive
      ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 text-black'
      : 'bg-transparent text-white'"
  >
    <!-- NAVBAR -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-4 grid grid-cols-3 items-center text-xs tracking-[0.15em]">

      <!-- LEFT -->
      <div class="flex items-center gap-4">
        <button @click="isOpen = true" class="md:hidden">
          <Icon name="heroicons:bars-3" class="w-6 h-6" />
        </button>

        <nav class="hidden md:flex items-center gap-10">
          <div
            v-for="item in menu"
            :key="item.name"
            class="relative"
            @mouseenter="activeMenu = item.name"
          >
            <div class="hover:opacity-60">
              {{ item.name }}
            </div>
          </div>
        </nav>
      </div>

      <!-- LOGO -->
      <div class="flex justify-center">
        <NuxtLink to="/">
          <img
            src="/image/logo/tus.PNG"
            class="h-5 md:h-6"
          />
        </NuxtLink>
      </div>

      <!-- RIGHT -->
      <div class="flex justify-end items-center gap-4 md:gap-6">

        <!-- DESKTOP -->
        <div class="hidden md:flex items-center gap-6">

          <NuxtLink to="/account/login" class="hover:opacity-60">
            LOGIN
          </NuxtLink>

          <NuxtLink to="/about" class="hover:opacity-60">
            ABOUT
          </NuxtLink>

          <NuxtLink to="/contact" class="hover:opacity-60">
            CONTACT
          </NuxtLink>

          <!-- ICON GROUP -->
          <div class="flex items-center gap-4 ml-2">
            <NuxtLink to="/account/login">
              <Icon name="heroicons:user" class="w-5 h-5" />
            </NuxtLink>
          </div>

        </div>

        <!-- MOBILE -->
        <div class="flex md:hidden items-center gap-4">
          <NuxtLink to="/account/login">
            <Icon name="heroicons:user" class="w-5 h-5" />
          </NuxtLink>
        </div>

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

            <div class="col-span-9 grid grid-cols-3 gap-10">
              <div
                v-for="group in activeItem.children"
                :key="group.title"
                class="space-y-4"
              >
                <h4 class="text-xs text-gray-400 tracking-widest">
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

            <div class="col-span-3">
              <img
                src="https://loveandflair.com/cdn/shop/collections/Screenshot_2023-12-12_at_12.03.19_AM.png"
                class="w-full h-[220px] object-cover rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </transition>

    <!-- OVERLAY -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/40 z-[998]"
        @click="isOpen = false"
      />
    </transition>

    <!-- MOBILE MENU -->
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-[85%] max-w-sm h-full bg-white z-[9999] p-6 overflow-y-auto"
    >
      <!-- HEADER -->
      <div class="flex justify-between items-center mb-8">
        <span class="text-sm tracking-widest">MENU</span>
        <button @click="isOpen = false">
          <Icon name="heroicons:x-mark" class="w-5 h-5" />
        </button>
      </div>

      <!-- NAV -->
      <nav class="flex flex-col divide-y text-black">
        <div
          v-for="(item, index) in menu"
          :key="item.name"
          class="py-4"
        >
          <div class="flex justify-between items-center">
            <NuxtLink
              :to="item.link"
              @click="isOpen = false"
              class="text-sm"
            >
              {{ item.name }}
            </NuxtLink>

            <button
              v-if="item.children"
              @click="toggleMobileMenu(index)"
            >
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition"
                :class="{ 'rotate-180': activeMobileMenu === index }"
              />
            </button>
          </div>

          <transition name="accordion">
            <div
              v-show="item.children && activeMobileMenu === index"
              class="mt-4 pl-3 space-y-4"
            >
              <div v-for="group in item.children" :key="group.title">
                <p class="text-xs text-gray-400 mb-2">
                  {{ group.title }}
                </p>

                <NuxtLink
                  v-for="child in group.items"
                  :key="child.name"
                  :to="child.link"
                  class="block text-sm text-gray-600 py-1"
                  @click="isOpen = false"
                >
                  {{ child.name }}
                </NuxtLink>
              </div>
            </div>
          </transition>
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
.mega-enter-from,
.mega-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>