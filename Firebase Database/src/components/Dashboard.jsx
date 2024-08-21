import axios from "axios"; // Assuming you have a Dashboard.css file
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="title">Product</h1>
      <div className="product-grid">
        {data.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image}  className="product-image" />
            <h3 className="product-title">{el.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
