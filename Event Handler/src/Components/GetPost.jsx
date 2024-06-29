import React from 'react'

const GetPost = ({ title, body }) => {
  return (
    <div className="App">
      <div className="Post">
        <h1>{title}</h1>
        <h3>{body}</h3>
      </div>
    </div>
  );
}

export default GetPost
