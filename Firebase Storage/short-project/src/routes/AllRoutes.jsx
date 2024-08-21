import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Product from '../Components/Product'
import Post from '../Components/Post'
import PostwithFormik from '../Components/PostwithFormik'
import Login from '../Components/Login'

 
function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/Product' element={<Product/>}></Route>
       <Route path='/post' element={<Post/>}></Route>
       <Route path='/formik' element={<PostwithFormik/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default AllRoutes
