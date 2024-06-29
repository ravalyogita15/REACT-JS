
import './App.css'
import { useState } from 'react';
function App() {
  const [data, setData] = useState([]);

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  const Postcard = () => (
    <>
      {data.map((post) => (
        <div key={post.id} className="Post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
           {/* Create a button and name it getpost then fetch data from help of api  */}
        </div>
      ))}
    </>
  );

  return (
    <body>
      <div className="App">
        <div class="button-container" onClick={fetchPost}>
          <a href="#" class="btn">
          GET POSTS
          </a>
        </div>
        <div className="posts-container">
          <Postcard />
          {/* key then use map method then show it then data should be shown on onclick of button */}
        </div>
      </div>
    </body>
  );

  
}


export default App
