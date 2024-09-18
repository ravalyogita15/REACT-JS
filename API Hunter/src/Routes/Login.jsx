// function Login() {
//   return (
//     <div>
//       <form data-testid="login-form">
//         <div>
//           <label>
//             Email
//             <input data-testid="email-input" type="email" placeholder="email" />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password
//             <input
//               data-testid="password-input"
//               type="password"
//               placeholder="password"
//             />
//           </label>
//         </div>
//         <div>
//           <input data-testid="form-submit" type="submit" value="SUBMIT" />
//         </div>
//       </form>
//       <div>
//         <Link to="/">Go Back</Link>
//       </div>
//     </div>
//   );
// }
// export default Login;



// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";



// const Login = () => {
//   const { loginUser } = useContext(AuthContext);
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://reqres.in/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });
//       const data = await response.json();
//       if (data.token) {
//         loginUser(data.token);
//         navigate("/dashboard");
//       } else {
//         setError("Login failed");
//       }
//     } catch (error) {
//       setError("Error logging in");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={credentials.email}
//           onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={credentials.password}
//           onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;



import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.token) {
        loginUser(data.token);
        navigate("/dashboard");
      } else {
        setError("Login failed");
      }
    } catch (error) {
      setError("Error logging in");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="login-error">{error}</p>}
    </div>
  );
};

export default Login;

