import { useState, useEffect } from 'react';

const RestApi = () => {
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const getPosts = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setPosts(res)
  }

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div>
      <ul>
       {posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default RestApi;