import React from "react";
import { Footer, FilterBar, Film } from '../../components/';

export const HomePage = () => {
  const data = [
    {
      year: "2003",
      title: "Kill Bill",
      category: "Drama",
    },
    {
      year: "2003",
      title: "Kill Bill",
      category: "Drama",
    },
    {
      year: "2003",
      title: "Kill Bill",
      category: "Drama",
    },
    {
      year: "2003",
      title: "Kill Bill",
      category: "Drama",
    },
    {
      year: "2003",
      title: "Kill Bill",
      category: "Drama",
    },
    {
      year: "2003",
      title: "Kill Bill",
      category: "Drama",
    }
  ];

  return (
    <>
      <main className="main">
        <div className="main__filter">
          <FilterBar></FilterBar>
        </div>
        <div className="main__films">
          {data.map((item, index) => (
          <div key={index} className="main__film">
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