export interface BaseAPIResponse<T> {
  metadata: {
    path: string
    statusCode: number
    status: string
    messsage: string
    timestamp: string
  }

  data: T

  pagination: {
    page: number
    limit: number
    orderBy: string[]
    totalItems: number
    totalPages: number
  }
}