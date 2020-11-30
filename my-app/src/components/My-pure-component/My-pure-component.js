import React, { PureComponent } from "react";

export class MyPureComponent extends PureComponent {
  render() {
    const { name } = this.props;

    return <h1>Привет, {name}</h1>;
  }
}