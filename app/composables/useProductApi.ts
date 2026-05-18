import type { ProductDetailResponse, ProductListResponse, ProductQuery } from '~/type/product'
import type { BaseAPIResponse } from '~/type/base-response'

export const useProductApi = () => {
  const config = useRuntimeConfig()

    const getProducts = async ( params?: ProductQuery): 
        Promise<BaseAPIResponse<ProductListResponse>> => {
        return await $fetch(
            "/api/v1/public/product",
            {
                baseURL: config.public.apiBase,
                method: "GET",
                query: params
            }
        )
    }
  
  const getProduct = async (slug: string): 
        Promise<BaseAPIResponse<ProductDetailResponse>> => {
        return await $fetch(
            `/api/v1/public/product/${slug}`,
            {
                baseURL: config.public.apiBase,
                method: "GET"
            }
        )
    }

  return {
    getProducts,
    getProduct
  }
}