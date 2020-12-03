import React from "react";
import { SearchInput } from "../Search-Input/";
import { Button } from "../Button/";

export const SearchBar = () => {
  return (
    <div className="search-bar">
        <h1 className="search-bar__title">Find your movie</h1>
        <div className="search-bar__search-container">
          <div className="search-bar__search-input">
              <SearchInput></SearchInput>
          </div>
          <div className="search-bar__search-button">
              <Button title="Search" color="red" size="big" />
          </div>
        </div>
    </div>

  )
}