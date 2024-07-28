import axios from 'axios'
import React, { useState } from 'react'

const initalstate = {
  title: "",
  price: 0,
  description: "",
  category: "",
  image: ""
}

const AddProduct = () => {
  const [formdata, setformdata] = useState(initalstate)

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const { title, price, category, description, image } = formdata

  const handlsubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3000/product", formdata)
      .then((res) => {
        alert("data added")
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.header}>Add Product Page</h1>
        <form onSubmit={handlsubmit} style={styles.form}>
          <input name='image' value={image} onChange={handlechange} type="text" placeholder="Image" style={styles.input} /> <br />
          <input name='title' value={title} onChange={handlechange} type="text" placeholder="Title" style={styles.input} /> <br />
          <select name='category' value={category} onChange={handlechange} style={styles.select}>
            <option value={""}>Select your category</option>
            <option value={"men's clothing"}>Men's Clothing</option>
            <option value={"jewelery"}>Jewelery</option>
            <option value={"electronics"}>Electronics</option>
            <option value={"women's clothing"}>Women's Clothing</option>
          </select>
          <input name='price' value={price} onChange={handlechange} type="text" placeholder="Price" style={styles.input} /> <br />
          <input name='description' value={description} onChange={handlechange} type="text" placeholder="Description" style={styles.input} /> <br />
          <input type="submit" style={styles.submit} />
        </form>
      </div>
    </div>
  )
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height for vertical centering
    backgroundColor: '#f0f0f0' // Background color for outer container
  },
  container: {
    padding: '20px',
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional box shadow for better appearance
  },
  header: {
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px'
  },
  select: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px'
  },
  submit: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer'
  }
}

export default AddProduct
