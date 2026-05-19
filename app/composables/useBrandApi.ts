// composables/useBrandApi.ts

import type { BrandQuery, BrandResponse } from '~/type/brand'

export const useBrandApi = () => {
  const config = useRuntimeConfig()

  const getBrands = async ( params?: BrandQuery): Promise<BrandResponse> => {
    return await $fetch(
      '/api/v1/public/brand',
      {
        baseURL:
          config.public.apiBase,
        method: 'GET',
        query: params
      }
    )
  }

  return {
    getBrands
  }
}