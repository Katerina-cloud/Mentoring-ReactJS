import React from "react";
import "./App.css";
import { MyCreateElement } from "./components/My-create-element/";
import { MyComponent } from "./components/My-component/";
import { MyPureComponent } from "./components/My-pure-component/"
import { MyFunctionalComponent } from "./components/My-functional-component/"

const App = () => {
  return (
    <>
      <div className="App">
        <h1> Hello, World!</h1>
      </div>
      <MyCreateElement toWhat="MyCreateElement"></MyCreateElement>
      <MyComponent name="MyComponent"></MyComponent>
      <MyPureComponent name="MyPureComponent"></MyPureComponent>
      <MyFunctionalComponent name="MyFunctionalComponent"></MyFunctionalComponent>
    </>
  );
}

export default App;