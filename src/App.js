import { useEffect, useState } from 'react';
import React from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [posts, sePosts] = useState([])
  const api = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  })
  useEffect(() =>{
 // fetch('https://jsonplaceholder.typicode.com/posts')
  //.then(res => res.json())
  //.then(res => setInterval.posts(pState => [...pState, res]))
  api.get("/posts")
  .then(res => sePosts(pState => [...pState, res.data]))
 }, [] ) 
    return (
    <div>
     {posts.map(post => (
<div> key = {post.id}
<h1>{posts.title}</h1>
<p>{posts.body}</p>

</div>

     ))}
    </div>
  );
}

export default App;
