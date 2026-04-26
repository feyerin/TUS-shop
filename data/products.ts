export interface Product {
  id: number
  name: string
  price: number
  image: string
  soldOut?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ceres Two-Piece Dress In Beige",
    price: 1200000,
    image: "https://loveandflair.com/cdn/shop/files/LF-157_14b48dc6-2a4a-466f-bfa9-ddfd99a890ed.jpg?v=1772680575&width=1200",
    soldOut: true
  },
  {
    id: 2,
    name: "Ceres Two-Piece Dress In Sage Grey",
    price: 1200000,
    image: "https://loveandflair.com/cdn/shop/files/LF-153_14554004-320f-4e6b-af12-928f87e83607.jpg?v=1772680587&width=1200"
  },
  {
    id: 3,
    name: "Cassiopeia Two-Piece Dress In Silver",
    price: 1099000,
    image: "https://loveandflair.com/cdn/shop/files/LF-428_674cb420-591b-4795-9264-789d95ec7398.jpg?v=1764729044&width=1200"
  },
  {
    id: 4,
    name: "Cassiopeia Two-Piece Dress In Pink",
    price: 1099000,
    image: "https://loveandflair.com/cdn/shop/files/LF-182_1ae6d18f-cf3f-4be0-8e7f-15e06c3c9143.jpg?v=1767777984&width=1200",
    soldOut: true
  },
  {
    id: 5,
    name: "Cassiopeia Two-Piece Dress In Dusty Blue",
    price: 1099000,
    image: "https://loveandflair.com/cdn/shop/files/LF-176_795fd77d-9c2f-4d7e-b1ab-1b8d863dbd35.jpg?v=1770092859&width=1346",
  },
  {
    id: 6,
    name: "Lunara Midi Draped Dress In Blue",
    price: 1900000,
    image: "https://loveandflair.com/cdn/shop/files/LF-221_1fd3cbe5-5115-4aac-be25-d3667fb094b3.jpg?v=1764045760&width=1346",
  },
  {
    id: 7,
    name: "Lunara Midi Draped Dress In Beige",
    price: 1900000,
    image: "https://loveandflair.com/cdn/shop/files/LF-35_581ab638-3e72-4791-adba-100c78a4af83.jpg?v=1758598393&width=1346",
  },
  {
    id: 8,
    name: "Adelaide Halter Maxi Dress In Pink",
    price: 1499000,
    image: "https://loveandflair.com/cdn/shop/files/ScreenShot2025-09-23at10.31.18.png?v=1758598651&width=1346",
  },
  {
    id: 9,
    name: "Truette Two-Piece Mini Dress In Maroon",
    price: 749000,
    image: "https://loveandflair.com/cdn/shop/files/LF-227_efa4a88a-99b1-4a7f-afb9-3d5ad8891f10.jpg?v=1761731306&width=1346",
  },
  {
    id: 10,
    name: "Louri Gown In Espresso",
    price: 899000,
    image: "https://loveandflair.com/cdn/shop/files/LF-197_79f07e69-97d6-4d2b-922e-f19641ad4b1e.jpg?v=1761792003&width=1346",
  }
]