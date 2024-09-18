// function PrivateRoute() {}

// export default PrivateRoute;
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  return authState.isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
