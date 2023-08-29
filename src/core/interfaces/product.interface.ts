import { Category } from "./category.interface"

export interface Product {
  id: number
  code: string
  description: string
  priceQuetzales: number
  category?: string
  productCategory: Category
  price: number // usd
  dol: string
  oem: string
  cars: string
  information: string
  createdAt: string
  updatedAt: string
}