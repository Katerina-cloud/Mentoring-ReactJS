import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { ErrorBoundary } from './components/';
import { ErrorPage } from './pages/';

const App = () => {
  return (
    <ErrorBoundary>
      {/* <HomePage /> */}
      <ErrorPage />
      {/* <MovieDetailsPage movieId="2" /> */}
    </ErrorBoundary>
  );
};

export default hot(module)(App);
