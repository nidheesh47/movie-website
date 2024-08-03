import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <section className='background'>
    <div className="container mt-3">
      <div className='row gy-3 my-3 pt-3'>
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default MovieList;
