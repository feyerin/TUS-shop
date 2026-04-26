<script setup lang="ts">
import { ref } from "vue"

const email = ref("")
const password = ref("")

const handleLogin = () => {
  console.log("login", { email: email.value, password: password.value })
}
</script>

<template>
  <section class="min-h-screen grid md:grid-cols-2">

    <!-- LEFT -->
    <div class="flex items-center px-6 md:px-20 py-20 bg-white">

      <div class="w-full max-w-sm">

        <!-- TITLE -->
        <h1 class="text-[64px] font-light mb-12">
          Login
        </h1>

        <!-- FORM -->
        <form @submit.prevent="handleLogin" class="space-y-8">

          <!-- EMAIL -->
          <div class="space-y-3">
            <label class="text-[11px] tracking-[0.2em] text-gray-500">
              E-MAIL *
            </label>
            <input
              v-model="email"
              type="email"
              class="w-full border border-gray-300 h-[60px] px-4 py-3 text-sm 
                     outline-none transition
                     focus:border-black"
            />
          </div>

          <!-- PASSWORD -->
          <div class="space-y-3">
            <label class="text-[11px] tracking-[0.2em] text-gray-500">
              PASSWORD *
            </label>
            <input
              v-model="password"
              type="password"
              class="w-full border border-gray-300 h-[60px] px-4 py-3 text-sm 
                     outline-none transition
                     focus:border-black"
            />
          </div>

          <!-- ACTION -->
          <div class="flex gap-4 pt-4">

            <button
              type="submit"
              class="bg-black text-white px-6 py-3 text-[11px] tracking-[0.2em] 
                     hover:opacity-90 transition"
            >
              SIGN IN
            </button>

            <NuxtLink
              to="/account/register"
              class="border border-gray-300 px-6 py-3 text-[11px] 
                     tracking-[0.2em] hover:bg-gray-50 transition"
            >
              CREATE ACCOUNT
            </NuxtLink>

          </div>

        </form>

        <!-- FORGOT -->
        <div class="mt-8">
          <NuxtLink
            to="/account/forgot"
            class="text-[11px] text-gray-500 border-b border-gray-400 pb-1 
                   hover:text-black transition"
          >
            FORGOT YOUR PASSWORD?
          </NuxtLink>
        </div>

      </div>
    </div>

    <!-- RIGHT IMAGE -->
    <div class="hidden md:block h-screen">
      <img
        src="https://loveandflair.com/cdn/shop/files/IMG_2105.jpg?v=1774839594&width=1440"
        class="w-full h-full object-cover"
      />
    </div>

  </section>
</template>