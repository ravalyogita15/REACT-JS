import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Components/Login'
import AddProduct from '../../Components/AddProduct'
import Product from '../../Components/Product'
import Home from '../../Components/Home'
import Privatepage from '../../Components/Privatepage'
import Logout from '../../Components/Logout'
import Descrption from '../../Components/Descrption'
import Editpage from '../../Components/Editpage'
 
function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/product' element={
      <Privatepage>
        <Product />
        </Privatepage>
        
        }></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/edit/:id' element={<Editpage />}></Route>
       <Route path='/singlepage/:id' element={<Descrption />}></Route>
       <Route path='*' element={<h1> not found page</h1>}></Route>
       {/* <Route path='/logout' element={<Logout />}></Route> */}
       <Route path='/decrption' element={<Descrption />}></Route>
       <Route path='/addproduct' element={<AddProduct />}></Route>
    </Routes>
  )
}

export default AllRoutes
