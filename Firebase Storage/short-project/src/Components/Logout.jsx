import React from 'react'

const Logout = () => {
    const handleclick=()=>{
        localStorage.clear('token')
        alert("you are Logout server")
    }
  return (

    
    <div>
      <button onClick={handleclick}>Logout</button>
    </div>
  )
}

export default Logout
