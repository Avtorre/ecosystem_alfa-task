import React from "react"

export type Product = {
  id: number, 
  title: string,
  description: string,
  price: number,
  category: string,
  image: string,
  rating: {rate: number, count: number}
  favourite?: boolean 
}

export type User = {
  id?: number,
  name?: string,
  favourite: number[]
}

export type Rout = {
  path: string,
  component: () => JSX.Element
}