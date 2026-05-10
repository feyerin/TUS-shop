import type { CollectionResponse, CollectionQuery} from '~/type/collection'

export const useCollectionApi = () => {
  const config = useRuntimeConfig()

    const getCollections = async ( params?: CollectionQuery): 
        Promise<CollectionResponse> => {
        return await $fetch(
            "/api/v1/public/collection",
            {
                baseURL: config.public.apiBase,
                method: "GET",
                query: params
            }
        )
    }

  return {
    getCollections
  }
}