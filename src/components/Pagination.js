import React from 'react';
  // declaración de variables
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  // divide la cantidad de posts total entre los que se quieren por página 
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i); // asigna el resultado a la cantidad de páginas calculadas.
  }
  // rendern del component pagination
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
