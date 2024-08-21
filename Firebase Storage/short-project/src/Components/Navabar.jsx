import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#f8f9fa',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '16px',
  padding: '8px 12px',
  borderRadius: '4px',
  transition: 'background-color 0.3s, color 0.3s'
};

const linkHoverStyle = {
  backgroundColor: '#007bff',
  color: '#fff'
};

function Navabar() {
  const handleclick=()=>{
    localStorage.removeItem('token')
    alert("you are Logout server")
}
  return (
    <div style={navStyle}>
      <Link to="/" style={linkStyle} onMouseOver={e => e.currentTarget.style = {...linkStyle, ...linkHoverStyle}} onMouseOut={e => e.currentTarget.style = linkStyle}>Home</Link>
      <Link to="/login" style={linkStyle} onMouseOver={e => e.currentTarget.style = {...linkStyle, ...linkHoverStyle}} onMouseOut={e => e.currentTarget.style = linkStyle}>Login</Link>
      <Link to="/post">postdata</Link>
      <Link to="/formik">PostwithFormik</Link>
      <Link to="/product">product</Link>
      <button onClick={handleclick}>logout</button>
    

    </div>
  );
}

export default Navabar;
