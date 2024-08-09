import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import Footer from './Footer';
import { movies } from '../helpers/constants';



function MoviePages() {
  return (
    <div>
      <Header />
      <div>
        <MovieList movies={movies} />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default MoviePages;
