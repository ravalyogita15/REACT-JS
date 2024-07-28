import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password
    };
    axios.post("https://reqres.in/api/login", userdata).then((res) => {
      let tokenfromequres = res.data.token;
      localStorage.setItem("token", tokenfromequres);
    })
    .catch((err) => console.log(err));
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px'
  };

  const submitStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h1>Login Page</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
        />
        <input
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <input style={submitStyle} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
