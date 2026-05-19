import type { SocialMediaResponse } from '~/type/socialMedia'

export const useSocialMediaApi = () => {
  const config = useRuntimeConfig()

  const getSocialMedia = async (): Promise<SocialMediaResponse> => {
    return await $fetch('/api/v1/public/social-media', {
      baseURL: config.public.apiBase
    })
  }

  return {
    getSocialMedia
  }
}