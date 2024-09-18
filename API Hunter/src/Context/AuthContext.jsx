// function AuthContextProvider() {
// }
// export default AuthContextProvider;


import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => { 
  const [authState, setAuthState] = useState({
    isAuth: false,
    token: null,
  });

  const loginUser = (token) => {
    setAuthState({ isAuth: true, token });
  };

  const logoutUser = () => {
    setAuthState({ isAuth: true, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};


