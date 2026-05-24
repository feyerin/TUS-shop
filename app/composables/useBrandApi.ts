// composables/useBrandApi.ts

import type { BaseAPIResponse } from '~/type/base-response'
import type { BrandQuery, BrandResponse } from '~/type/brand'
import type { ProductListResponse, ProductQuery } from '~/type/product'

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

  const getProductByBrands = async ( params?: ProductQuery): 
          Promise<BaseAPIResponse<ProductListResponse>> => {
          return await $fetch(
      `/api/v1/public/product`,
      {
        baseURL:
          config.public.apiBase,
        method: 'GET',
        query: params
      }
    )
  }

  return {
    getBrands,
    getProductByBrands
  }
}