import React, { useEffect, useState } from 'react';
import { Header, Footer, FilterBar, Film } from '../../components/';
import { movieData } from '../../mock-data';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  return (
    <>
      <Header />
      <main className="home-page__main">
        <div className="home-page__filter">
          <FilterBar />
        </div>
        <div className="home-page__films">
          {movies.map((item, index) => (
            <div key={index} className="home-page__film">
              <Film year={item.year} title={item.title} category={item.category} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
