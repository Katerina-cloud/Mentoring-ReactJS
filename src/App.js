import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { HomePage, MovieDetailsPage } from "./pages/";
import { Header } from './components/';
import { ErrorBoundary } from "./components/";
const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <MovieDetailsPage movieId="2" />
      <HomePage />
    </ErrorBoundary>
  );
}

export default hot(module)(App);