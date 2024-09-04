import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../pages/Main/Main'
import Product from '../../pages/Product/Product'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' Component={Main}/>
        <Route path='/product' Component={Product}/>
    </Routes>
  )
}

export default AppRouter
