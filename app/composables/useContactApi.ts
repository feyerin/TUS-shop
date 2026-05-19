import type { ContactResponse } from '~/type/contact'

export const useContactApi = () => {
  const config = useRuntimeConfig()

  const getContact = async (): Promise<ContactResponse> => {
    return await $fetch('/api/v1/public/contact', {
      baseURL: config.public.apiBase
    })
  }

  return {
    getContact
  }
}