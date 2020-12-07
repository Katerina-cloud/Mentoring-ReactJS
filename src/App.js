import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { HomePage } from "./pages/Home-Page";
import { Header } from './components/';
import { ErrorBoundary } from "./components/";
const App = () => {
  return (
    <ErrorBoundary>
    <header className="header">
      <Header />
    </header>
      <HomePage>
      </HomePage>
    </ErrorBoundary>
  );
}

export default hot(module)(App);