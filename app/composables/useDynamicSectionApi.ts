// composables/useDynamicSections.ts

export interface DynamicSection {
  id: string
  placementKey: string
  sectionKey: string
  sectionType: string
  title: string
  subtitle: string
  order: number
  content: any
  config: Record<string, any>
  isActive: boolean
  startsAt: string | null
  endsAt: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  createdBy: string | null
  updatedBy: string | null
  deletedBy: string | null
}

interface DynamicSectionResponse {
  metadata: {
    path: string
    statusCode: number
    status: string
    messsage: string
    timestamp: string
  }
  data: {
    dynamicSections: DynamicSection[]
  }
  pagination: {
    page: number
    limit: number
    totalItems: number
    totalPages: number
  }
}

export const useDynamicSections = async () => {
  const config = useRuntimeConfig()

  console.log(config)

  const { data, pending, error, refresh } =
    await useFetch<DynamicSectionResponse>(
      `${config.public.apiBase}/api/v1/public/dynamic-section`,
      {
        key: "dynamic-sections"
      }
    )

  return {
    data,
    pending,
    error,
    refresh,
    dynamicSections: computed(
      () => data.value?.data.dynamicSections ?? []
    )
  }
}