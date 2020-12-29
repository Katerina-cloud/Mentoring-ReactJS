import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { HomePage, MovieDetailsPage } from "./pages/";
import { ErrorBoundary } from "./components/";
const App = () => {
  return (
    <ErrorBoundary>
      <HomePage />
      <MovieDetailsPage movieId="2" />
    </ErrorBoundary>
  );
}

export default hot(module)(App);