import React from 'react';
// declaración de variables 
const Posts = ({ posts, loading }) => {
  //activando el loading screen
  if (loading) {
    return <h2>Loading...</h2>;
  }
  // render de component lista
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
