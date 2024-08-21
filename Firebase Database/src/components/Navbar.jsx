// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <Link to={"/login"}>Login</Link>
//      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <Link to={"/dashboard"}>Dashboard</Link>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={"/login"}>Login</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
}

export default Navbar;
