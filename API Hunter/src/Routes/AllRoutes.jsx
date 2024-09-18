// function AllRoutes() {
//   return (
//     <div>
// <h1>
//   red and white
// </h1>
//     </div>
//   );
// }

// export default AllRoutes;

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SingleProductPage from "./SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute";
import { Routes,Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} ></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;

//janet.weaver@reqres.in