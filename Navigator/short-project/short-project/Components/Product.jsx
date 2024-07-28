import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getDataFromServer = () => {
    axios
      .get(`http://localhost:3000/product?_page=${page}&_limit=5`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataFromServer();
  }, [page]);

  return (
    <div className="product-container">
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
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
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
