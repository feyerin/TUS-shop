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
  runtimeConfig: {
    public: {
      apiBase:
        import.meta.env.NUXT_PUBLIC_API_BASE || ""
    }
  },
})