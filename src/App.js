import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { ErrorBoundary } from './components/';
import { Container } from './container';

const App = () => {
  return (
    <ErrorBoundary>
      <Container />
    </ErrorBoundary>
  );
};

export default hot(module)(App);
