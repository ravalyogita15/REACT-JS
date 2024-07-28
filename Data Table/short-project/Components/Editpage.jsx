import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Description from './Descrption'

const initalstate={
    
        title:"",
        description:"",
        price:0,
        image:"",
        category:""
  
}
const Editpage = () => {
   const {id}=useParams()
   const[formdata,setformdata]=useState(initalstate)
   

const getsingledata=()=>{
    axios.get(`http://localhost:3000/product/${id} `)
    .then((res)=>{
        console.log(res.data)
        setformdata(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
 
const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
}
const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)

    // fetch(`http://localhost:3000/product"/${id}`,{
    //     method:"PUT",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify(formdata)
    // })
    // .then((res)=>res.json())
    // .then((data)=>{
    //     console.log(data)
    //     alert("updated")
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    axios.put(`http://localhost:3000/product"/${id}`,formdata)
    .then((res)=>{
        console.log(res)
        alert("updated")
    })
    .catch((err)=>{
        console.log(err)
    })
}
const{title,price,description,image,category}=formdata

useEffect(()=>{
    getsingledata()

},[])
    
  return (
   <>
      <h1>Edit product page</h1>
        <form onSubmit={(e)=> handlesubmit(e)}> 
        <input name='image'value={image} onChange={(e)=>handlechange(e)} type="text" placeholder="Image" /> <br /> 
        <input name='title'value={title} onChange={(e)=>handlechange(e)} type="text" placeholder="title" /> <br /> 
        <select name='category'value={category} onChange={(e)=>handlechange(e)}> 
        <option value={""}>select Your Category</option> 
        <option value={"men's clothing"}>men's clothing</option> 
        <option value={"jewelery"}>jewelery</option> 
        <option value={"electronics"}>electronics</option> 
        <option value={"women's clothing"}>women's clothing</option>
         </select> 
         <input name='price'value={price} onChange={(e)=>handlechange(e)} type="text" placeholder="Price" /> <br /> 
         <input name='description'value={description} onChange={(e)=>handlechange(e)} type="text" placeholder="description" /> <br /> 
         <input type="submit" /> 
         </form> 
         </>
   
  )
}

export default Editpage
