// // function Dashboard() {
// //   return (
// //     <div>
// //       <h3>Dashboard</h3>
// //       <div>
// //         <button data-testid="logout-btn">Logout</button>
// //         <p>
// //           Token:
// //           <b data-testid="user-token"></b>
// //         </p>
// //       </div>
// //       <div style={{ display: "flex", justifyContent: "center" }}>
// //         {/* Products table */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;


// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
// import ProductsTable from "../Components/ProductsTable";

// const Dashboard = () => {
//   const { authState, logoutUser } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
//       const data = await res.json();
//       setProducts(data.data);
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button data-testid="logout-btn" onClick={handleLogout}>
//         Logout
//       </button>
//       <p data-testid="user-token">Token: {authState.token}</p>
//       {loading ? <p>Loading...</p> : <ProductsTable data={products} />}
//     </div>
//   );
// };

// export default Dashboard;
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";


const Dashboard = () => {
  const { authState, logoutUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"
      );
      const data = await res.json();
      setProducts(data.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button data-testid="logout-btn" className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p data-testid="user-token" className="token-info">
        Token: {authState.token}
      </p>
      {loading ? (
        <p className="products-loading">Loading...</p>
      ) : (
        <ProductsTable data={products} />
      )}
    </div>
  );
};

export default Dashboard;
