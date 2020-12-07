import React from "react";
import { Button, Logo, SearchBar } from "../../components/";

export const Header = () => {
  return (
    <>
      <div className="header__add-movie">
        <Logo />
        <Button title="+Add movie" color="gray" textColor="red" />
      </div>
      <div className="header__search-bar">
        <SearchBar />
      </div>
    </>
  )
}