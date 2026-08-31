import type { ContactResponse } from '~/type/contact'

export const useBusinessContact = () => {
  const config = useRuntimeConfig()

  const contact = useState<ContactResponse | null>(
    'business-contact',
    () => null
  )

  const isFetched = useState(
    'business-contact-fetched',
    () => false
  )

  const getContact = async () => {
    if (isFetched.value) return contact.value

    const data = await $fetch<ContactResponse>(
      '/api/v1/public/contact',
      {
        baseURL: config.public.apiBase,
      }
    )

    contact.value = data
    isFetched.value = true

    return data
  }

  return {
    contact,
    getContact,
  }
}