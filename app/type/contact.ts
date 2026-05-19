export interface ContactData {
  email: string
  hours: string
  phone_number: string
  store: string
}

export interface ContactMetadata {
  messsage: string
  path: string
  requestId: string
  status: string
  statusCode: number
  timestamp: string
}

export interface ContactPagination {
  limit: number
  orderBy: string[]
  page: number
  totalItems: number
  totalPages: number
}

export interface ContactResponse {
  data: ContactData
  metadata: ContactMetadata
  pagination: ContactPagination
}