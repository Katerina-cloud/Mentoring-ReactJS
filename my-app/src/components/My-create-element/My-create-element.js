import React from "react";

export const MyCreateElement = ({ toWhat }) => {
  return React.createElement('h1', null, `Привет, ${toWhat}`);
}
