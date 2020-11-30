import React, { Component } from "react";

export class MyComponent extends Component {
  render() {
    const { name } = this.props;

    return <h1>Привет, {name}</h1>;
  }
}