import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../pages/Main/Main'
import Product from '../../pages/Product/Product'
import Create from '../../pages/Create/Create'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/products' Component={Main}/>
        <Route path='/products/:id' Component={Product}/>
        <Route path='/create-product' Component={Create}/>
        <Route path='*' Component={Main}/>
    </Routes>
  )
}

export default AppRouter
