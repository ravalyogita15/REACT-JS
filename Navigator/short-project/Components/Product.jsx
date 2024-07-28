import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const[selectCategory,setselectCategory]=useState(null);
  const [search,setsearch]=useState("")
  const[order,setorder]=useState()

  const getDataFromServer = () => {
    axios
      .get(`http://localhost:3000/product`,{
        params:{
          
          _page:page,
          _limit:10,
          category:selectCategory,
          _sort:"price",
          _order: order,
          q:search

        }
      })
      .then((res) => { 
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
  const handledelete=(id)=>{
    axios.delete(`http://localhost:3000/product/${id}`)
    .then((res)=>{
      alert("deleted")
      getDataFromServer()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    getDataFromServer();
  }, [page ,selectCategory,order,search]);

  const handlechange=(e)=>{
    setsearch(e.target.value)
    console.log(setsearch)
  }

  return (
    <div className="product-container">
      <hr />
      <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
            {/* {select} */}
            <select name="" id="" onChange={(e)=>setselectCategory(e.target.value)}>
              <option value="">select your category</option>
              <option value="men's clothing">Men</option>
              <option value="women's clothing">Women</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              
            </select>
          </div>
          <div className='searchbox'>
            <input type="text" placeholder='search' onChange={(e)=>handlechange(e)} />
          </div>
          <div>
            {/* {btn} */}
            <button className="button" onClick={() => setorder('asc')}>Low to High</button>
            <button className="button" onClick={() => setorder('desc')}>High to Low</button>

          </div>
        
      </div>
      <hr />
      <h1 className="product-title">Product Page</h1>
      
      <div className="product-grid">
        {data.map((el) => (
          <div key={el.id} className="product-card">
            <Link to={`/singlepage/${el.id}`} > 
            <img src={el.image} alt={el.title} className="product-image" />
            </Link> 
            <h3 className="product-title">{el.title}</h3>
            <h1 className="product-id">{el.id}</h1>
            <h3 className="product-price">${el.price}</h3>
            <p className="product-description">{el.description}</p>
            <h3 className="product-category">{el.category}</h3>
            <div className="product-buttons">
              <button className="edit-button"><Link to={`/edit/${el.id}`}>Edit</Link></button>
              <button className="delete-button" onClick={()=>handledelete(el.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} className="pagination-button">Prev</button>
        <span className="pagination-page">{page}</span>
        <button onClick={() => setPage(page + 1)} className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default Product;
