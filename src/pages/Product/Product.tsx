import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { createSelector } from '@reduxjs/toolkit'

const Product = () => {
  const product = useSelector((state: RootState) => state.products).filter(p => p.id === 1)
  return (
    <div>
      {product.map(p => {
        return (
        <div>
            {p.title}
        </div>
      )})}
    </div>
  )
}

export default Product
