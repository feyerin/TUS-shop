export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxt/icon'
  ],
  typescript: {
    strict: true
  },
  ssr: false
})