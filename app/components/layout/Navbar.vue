<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import { useBrandApi } from '~/composables/useBrandApi'
import { useCollectionApi } from '~/composables/useCollectionApi'

import type { Brand, BrandResponse } from '~/type/brand'
import type {
  Collection,
  CollectionResponse
} from '~/type/collection'

const route = useRoute()

const { getCollections } = useCollectionApi()
const { getBrands } = useBrandApi()

interface MenuChild {
  name: string
  link: string
}

interface MenuGroup {
  title: string
  items: MenuChild[]
}

interface MenuItem {
  name: string
  link: string
  children?: MenuGroup[]
}

const collections = ref<Collection[]>([])
const brands = ref<Brand[]>([])

const isScrolled = ref(false)
const isOpen = ref(false)

const activeMenu = ref<string | null>(null)
const activeMobileMenu = ref<number | null>(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const fetchCollections = async () => {
  try {
    const res: CollectionResponse =
      await getCollections()

    collections.value =
      res.data.collections ?? []
  } catch (err) {
    console.error(
      'Failed fetch collections',
      err
    )
  }
}

const fetchBrand = async () => {
  try {
    const res: BrandResponse =
      await getBrands()

    brands.value = res.data.brands ?? []
  } catch (err) {
    console.error(
      'Failed fetch brand',
      err
    )
  }
}

onMounted(() => {
  window.addEventListener(
    'scroll',
    handleScroll
  )

  fetchCollections()
  fetchBrand()
})

onUnmounted(() => {
  window.removeEventListener(
    'scroll',
    handleScroll
  )
})

const transparentRoutes = [
  '/',
  '/account/login'
]

const isActive = computed(() => {
  const isTransparentPage =
    transparentRoutes.includes(
      route.path
    )

  if (isTransparentPage) {
    return (
      isScrolled.value ||
      activeMenu.value !== null
    )
  }

  return true
})

const menu = computed<MenuItem[]>(() => [
  {
    name: 'NEW',
    link: '/collections/new'
  },

  {
    name: 'COLLECTIONS',
    link: '/collections/all',

    children:
      collections.value.map(
        collection => ({
          title:
            collection.name.toUpperCase(),

          items:
            collection.categories.map(
              category => ({
                name:
                  category.name,

                link: `/collections/${category.slug}`
              })
            )
        })
      )
  },

  {
    name: 'BRAND',
    link: '/collections/brand',

    children: [
      {
        title: 'ALL BRANDS',

        items:
          brands.value.map(
            brand => ({
              name: brand.name,
              link: `/brand/${brand.slug}`
            })
          )
      }
    ]
  },

  {
    name: 'SALE',
    link: '/collections/sale'
  }
])

const activeItem = computed(() =>
  menu.value.find(
    item =>
      item.name === activeMenu.value
  )
)

const toggleMobileMenu = (
  index: number
) => {
  activeMobileMenu.value =
    activeMobileMenu.value === index
      ? null
      : index
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-[9999] transition-all duration-300"
    :class="
      isActive
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 text-black'
        : 'bg-transparent text-white'
    "
  >
    <!-- NAVBAR -->
    <div
      class="max-w-7xl mx-auto px-4 md:px-8 py-4 grid grid-cols-3 items-center text-xs tracking-[0.15em]"
    >
      <!-- LEFT -->
      <div class="flex items-center gap-4">
        <button
          class="md:hidden"
          @click="isOpen = true"
        >
          <Icon
            name="heroicons:bars-3"
            class="w-6 h-6"
          />
        </button>

        <nav
          class="hidden md:flex items-center gap-10"
        >
          <div
            v-for="item in menu"
            :key="item.name"
            class="relative"
            @mouseenter="
              activeMenu = item.name
            "
          >
            <NuxtLink
              :to="item.link"
              class="hover:opacity-60"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </nav>
      </div>

      <!-- LOGO -->
      <div class="flex justify-center">
        <NuxtLink to="/">
          <img
            src="/image/logo/tus.PNG"
            class="h-5 md:h-6"
          >
        </NuxtLink>
      </div>

      <!-- RIGHT -->
      <div
        class="flex justify-end items-center gap-4 md:gap-6"
      >
        <div
          class="hidden md:flex items-center gap-6"
        >
          <NuxtLink
            to="/account/login"
            class="hover:opacity-60"
          >
            LOGIN
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="hover:opacity-60"
          >
            ABOUT
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="hover:opacity-60"
          >
            CONTACT
          </NuxtLink>

          <NuxtLink to="/account/login">
            <Icon
              name="heroicons:user"
              class="w-5 h-5"
            />
          </NuxtLink>
        </div>

        <!-- MOBILE -->
        <div
          class="flex md:hidden items-center gap-4"
        >
          <NuxtLink
            to="/account/login"
          >
            <Icon
              name="heroicons:user"
              class="w-5 h-5"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- MEGA MENU -->
    <transition name="mega">
      <div
        v-if="activeItem?.children"
        class="absolute left-0 top-full w-full bg-white text-black border-t border-gray-100 shadow-sm"
        @mouseenter="
          activeMenu =
            activeItem.name
        "
        @mouseleave="
          activeMenu = null
        "
      >
        <div
          class="max-w-7xl mx-auto px-8 py-12"
        >
          <div class="grid grid-cols-12 gap-10">
            <!-- MENU -->
            <div
              :class="
                activeItem.name ===
                'BRAND'
                  ? 'col-span-9 grid grid-cols-3 gap-10'
                  : 'col-span-12 grid grid-cols-4 gap-10'
              "
            >
              <div
                v-for="group in activeItem.children"
                :key="group.title"
                class="space-y-4"
              >
                <h4
                  class="text-xs text-gray-400 tracking-widest"
                >
                  {{ group.title }}
                </h4>

                <ul class="space-y-2">
                  <li
                    v-for="child in group.items"
                    :key="child.name"
                  >
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

            <!-- BRAND IMAGE -->
            <div
              v-if="activeItem.name === 'BRAND'"
              class="col-span-3"
            >
              <div class="grid grid-cols-1 gap-4">
                <div
                  v-for="brand in brands.slice(0, 2)"
                  :key="brand.id"
                  class="relative overflow-hidden rounded-2xl h-[180px]"
                >
                  <img
                    :src="brand.profileImageUrl"
                    class="w-full h-full object-cover hover:scale-105 transition duration-500"
                  >

                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
                  >
                    <span
                      class="text-white text-sm tracking-widest font-medium"
                    >
                      {{ brand.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- MOBILE NAVBAR -->
    <Teleport to="body">
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
        <div
          class="flex justify-between items-center mb-8"
        >
          <span
            class="text-sm tracking-widest"
          >
            MENU
          </span>

          <button
            @click="isOpen = false"
          >
            <Icon
              name="heroicons:x-mark"
              class="w-5 h-5"
            />
          </button>
        </div>

        <nav
          class="flex flex-col divide-y text-black"
        >
          <div
            v-for="(
              item, index
            ) in menu"
            :key="item.name"
            class="py-4"
          >
            <div
              class="flex justify-between items-center"
            >
              <NuxtLink
                :to="item.link"
                class="text-sm"
                @click="
                  isOpen = false
                "
              >
                {{ item.name }}
              </NuxtLink>

              <button
                v-if="item.children"
                @click="
                  toggleMobileMenu(
                    index
                  )
                "
              >
                <Icon
                  name="heroicons:chevron-down"
                  class="w-4 h-4 transition"
                  :class="{
                    'rotate-180':
                      activeMobileMenu ===
                      index
                  }"
                />
              </button>
            </div>

            <transition
              name="accordion"
            >
              <div
                v-show="
                  item.children &&
                  activeMobileMenu ===
                    index
                "
                class="mt-4 pl-3 space-y-4"
              >
                <div
                  v-for="group in item.children"
                  :key="group.title"
                >
                  <p
                    class="text-xs text-gray-400 mb-2"
                  >
                    {{ group.title }}
                  </p>

                  <NuxtLink
                    v-for="child in group.items"
                    :key="
                      child.name
                    "
                    :to="
                      child.link
                    "
                    class="block text-sm text-gray-600 py-1"
                    @click="
                      isOpen = false
                    "
                  >
                    {{ child.name }}
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>
        </nav>
      </div>
    </Teleport>
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