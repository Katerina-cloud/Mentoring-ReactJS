import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { HomePage } from "./pages/Home-Page";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
const App = () => {
  return (
    <>
      <HomePage>
      </HomePage>
    </>
  );
}

export default hot(module)(App);