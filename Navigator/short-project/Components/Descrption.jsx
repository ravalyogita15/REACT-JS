
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
  const [singleproductdata, setsingleproductdata] = useState({})
  const { id } = useParams()

  const getsingledata = () => {
    axios.get(`http://localhost:3000/product/${id}`)
      .then((res) => setsingleproductdata(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getsingledata()
  }, [id])

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.header}>Description</h1>
        <h1>{singleproductdata.id}</h1>
        <img src={singleproductdata.image} alt="" style={styles.image} />
        <h3>{singleproductdata.title}</h3>
        <h3>{singleproductdata.price}</h3>
        <h5>{singleproductdata.category}</h5>
        <p>{singleproductdata.description}</p>
      </div>
    </div>
  )
}

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: '20px',
    backgroundColor: '#f0f0f0',
    height:"700px",
    width:"100%"

  },
  container: {
    width: "50%",
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  header: {
    marginBottom: '20px'
  },
  image: {
    maxWidth: '100%',
    height: "300px",
    marginBottom: '20px'
  }
}

export default Description

