import React from "react";
import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';
import { FilterBar } from '../../components/Filter-Bar/';
import { Film } from '../../components/Film/';

export const HomePage = () => {
  return (
    <>
    <header className="header">
      <Header></Header>
    </header>
    <main className="main">
      <div className="main__filter">
        <FilterBar></FilterBar>
      </div>
      <div className="main__films">
        <Film year="2003" title="Kill Bill" category="Drama"></Film>
        <Film year="2003" title="Kill Bill" category="Drama"></Film>
        <Film year="2003" title="Kill Bill" category="Drama"></Film>
        <Film year="2003" title="Kill Bill" category="Drama"></Film>
        <Film year="2003" title="Kill Bill" category="Drama"></Film>
        <Film year="2003" title="Kill Bill" category="Drama"></Film>
      </div>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}