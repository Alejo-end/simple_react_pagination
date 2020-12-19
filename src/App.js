import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

// declaracion de variables
const App = () => {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // traer data de posts 
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); // cambiar url
      setPosts(res.data);
      setLoading(false);
    };
    // llamado a la funcion para ejecutar
    fetchPosts();
  }, []);

  // indice del ultimo post de la página
  const indexOfLastPost = currentPage * postsPerPage; 
  // índice del primer post de la página
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Posts que estan dentro de los indices por pagina
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Cambiar página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // render de la pagina
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
