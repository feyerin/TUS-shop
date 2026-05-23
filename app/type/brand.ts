// ~/types/brand.ts

export interface Brand {
  id: string

  name: string
  slug: string
  profileImageUrl: string

  createdAt: string
  updatedAt: string
  deletedAt: string | null

  createdBy?: string
  updatedBy?: string
  deletedBy?: string | null
}

export interface BrandQuery {
  page?: number
  limit?: number
  search?: string
  orderBy?: string
}

export interface BrandResponse {
  metadata: {
    path: string
    statusCode: number
    status: string
    messsage: string
    timestamp: string
  }

  data: {
    brands: Brand[]
  }

  pagination: {
    page: number
    limit: number
    totalItems: number
    totalPages: number
  }
}