import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../Services/Firebase";
import { useEffect, useState } from "react";
import "../App.css"
let initialstate = {
  image: "",
  price: "",
  description: "",
  category: "",
  title: "",
};

const Product = () => {
  const [product, setProduct] = useState([]);
  const [formdata, setFormdata] = useState(initialstate);
  const [id, setId] = useState(0);
  const { image, price, description, category, title } = formdata;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const fatchdatafromfirestore = async () => {
    try {
      const datafromdb = await getDocs(collection(db, "product"));
      if (datafromdb) {
        let filetrdata = datafromdb.docs.map((el) => ({
          ...el.data(),
          id: el.id,
        }));
        setProduct(filetrdata);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "product", id));
      fatchdatafromfirestore(); // Refresh the data after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSingledata = async (id) => {
    setId(id);
    try {
      let res = await getDoc(doc(db, "product", id));
      let filterdata = res.data();
      setFormdata(filterdata);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "product", id), formdata);
      fatchdatafromfirestore(); // Refresh the data after update
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatchdatafromfirestore();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <hr />
      <h1 className="form-title">Update Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={image}
          name="image"
          placeholder="Image URL..."
          className="form-input"
        />
        <br />

        <input
          type="text"
          onChange={handleChange}
          value={price}
          name="price"
          placeholder="Price"
          className="form-input"
        />
        <br />

        <select
          value={category}
          name="category"
          onChange={handleChange}
          className="form-select"
        >
          <option value="" hidden>
            Category
          </option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <br />

        <input
          type="text"
          onChange={handleChange}
          value={description}
          name="description"
          placeholder="Description"
          className="form-input"
        />
        <br />

        <input
          type="text"
          onChange={handleChange}
          value={title}
          name="title"
          placeholder="Title"
          className="form-input"
        />
        <br />

        <input type="submit" className="form-submit" />
      </form>

      <hr />
      <h1 className="product-title">Products</h1>
      <div className="product-list">
        {product.length > 0 &&
          product.map((el) => (
            <div key={el.id} className="product-card">
              <img src={el.image} alt={el.title} className="product-image" />
              <p className="product-price">Price: {el.price}/-</p>
              <div className="product-actions">
                <button onClick={() => handleDelete(el.id)} className="product-button delete-button">
                  Delete
                </button>
                <button onClick={() => handleGetSingledata(el.id)} className="product-button edit-button">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;