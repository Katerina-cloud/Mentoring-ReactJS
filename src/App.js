import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { HomePage, MovieDetails } from "./pages/";
import { Header } from './components/';
import { ErrorBoundary } from "./components/";
const App = () => {
  return (
    <ErrorBoundary>
      <header className="header">
        <Header />
      </header>
      <MovieDetails movieId="2" />
      <HomePage />
    </ErrorBoundary>
  );
}

export default hot(module)(App);