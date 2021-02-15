import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { ErrorBoundary } from './components/';
import { ErrorPage, MovieDetailsPage, HomePage } from './pages/';

const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/film/:id">
          <MovieDetailsPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
};

export default hot(module)(App);
