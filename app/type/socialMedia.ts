export interface SocialMediaData {
  facebook: string
  instagram: string
  tiktok: string
}

export interface SocialMediaMetadata {
  messsage: string
  path: string
  requestId: string
  status: string
  statusCode: number
  timestamp: string
}

export interface SocialMediaPagination {
  limit: number
  orderBy: string[]
  page: number
  totalItems: number
  totalPages: number
}

export interface SocialMediaResponse {
  data: SocialMediaData
  metadata: SocialMediaMetadata
  pagination: SocialMediaPagination
}