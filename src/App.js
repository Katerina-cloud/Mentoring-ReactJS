import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { ErrorBoundary } from './components/';
import { MovieDetailsPage } from './pages/';

const App = () => {
  return (
    <ErrorBoundary>
      {/* <HomePage /> */}
      <MovieDetailsPage />
    </ErrorBoundary>
  );
};

export default hot(module)(App);
