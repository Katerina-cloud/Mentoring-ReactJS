import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { HomePage } from "./pages/Home-Page/";
import { ErrorBoundary } from "./components/ErrorBoundary/";
const App = () => {
  return (
    <ErrorBoundary>
      <HomePage>
      </HomePage>
    </ErrorBoundary>
  );
}

export default hot(module)(App);