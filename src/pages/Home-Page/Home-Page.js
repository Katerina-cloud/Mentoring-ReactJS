import React, { useEffect, useState } from "react";
import { Footer, FilterBar, Film } from '../../components/';
import { movieData } from '../../mock-data';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  return (
    <>
      <main className="home-page__main">
        <div className="home-page__filter">
          <FilterBar></FilterBar>
        </div>
        <div className="home-page__films">
          {movies.map((item, index) => (
          <div key={index} className="home-page__film">
            <Film year={item.year} title={item.title} category={item.category}></Film>
          </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}