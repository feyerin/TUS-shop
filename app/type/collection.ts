export interface Category {
  id: string
  collectionId: string

  name: string
  slug: string

  rank: number

  createdAt: string
  updatedAt: string
  deletedAt: string | null

  createdBy?: string
  updatedBy?: string
  deletedBy?: string | null
}

export interface Collection {
  id: string

  name: string
  slug: string

  rank: number

  createdAt: string
  updatedAt: string
  deletedAt: string | null

  createdBy?: string
  updatedBy?: string
  deletedBy?: string | null

  categories: Category[]
}

export interface CollectionQuery {
  page?: number
  limit?: number
  search?: string
  orderBy?: string
}

export interface CollectionResponse {
  metadata: {
    path: string
    statusCode: number
    status: string
    messsage: string
    timestamp: string
  }

  data: {
    collections: Collection[]
  }

  pagination: {
    page: number
    limit: number
    totalItems: number
    totalPages: number
  }
}