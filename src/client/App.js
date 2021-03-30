import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import './App.scss';
import { ErrorBoundary } from './components/';
// import { ErrorPage, MovieDetailsPage, HomePage } from './pages/';

const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        {/* <Route path="/film/:searchId">
          <MovieDetailsPage />
        </Route>
        <Route path="/search/:criteria">
          <HomePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route> */}
        {renderRoutes(Routes)}
      </Switch>
    </ErrorBoundary>
  );
};

export default hot(module)(App);
