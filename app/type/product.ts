

interface Link {
  createdAt: string;
  createdBy: string;
  deletedAt: string;
  deletedBy: string;
  id: string;
  label: string;
  linkType: string;
  productId: string;
  updatedAt: string;
  updatedBy: string;
  url: string;
}

interface CoverImage {
  createdAt: string;
  createdBy: string;
  id: string;
  imageUrl: string;
  order: number;
  productId: string;
  updatedAt: string;
  updatedBy: string;
}

interface Color {
  color: string;
  colorHexCode: string;
}

interface ColorsOption {
  additionalProp1: AdditionalProp12;
  additionalProp2: AdditionalProp12;
  additionalProp3: AdditionalProp12;
}

interface AdditionalProp12 {
  color: string;
  colorHexCode: string;
  id: string;
  isActive: boolean;
  productId: string;
  size: string;
  sizes: string[];
  sizesOptions: SizesOptions;
}

interface SizesOptions {
  additionalProp1: AdditionalProp1;
  additionalProp2: AdditionalProp1;
  additionalProp3: AdditionalProp1;
}

interface AdditionalProp1 {
  color: string;
  colorHexCode: string;
  id: string;
  isActive: boolean;
  productId: string;
  size: string;
}

export interface Product {
  id: string;

  basePrice: number;
  brandId: string;
  brandName: string;

  colors: Color[];
  coverImages: CoverImage[];
  description: string;
  discountType: string;
  discountValue: number;
  finalPrice: number;
  imageUrl: string;
  name: string;
  seoTag: string;
  slug: string;
  status: string;
  links: Link[];
  sizes: string[];

  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  deletedAt: string;
  deletedBy: string;
}

export interface ProductQuery {
  page?: number
  limit?: number
  search?: string
  orderBy?: string

  brands?: string
  categories?: string
  tags?: string
  colors?: string
  sizes?: string
}

export interface ProductResponse {
  metadata: {
    path: string
    statusCode: number
    status: string
    messsage: string
    timestamp: string
  }

  data: {
    products: Product[]
  }

  pagination: {
    page: number
    limit: number
    orderBy: string[]
    totalItems: number
    totalPages: number
  }
}

export interface ProductListResponse {
  products?: Product[];
}

export interface ProductDetailResponse {
  colorsOption: ColorsOption;
  product: Product;
}