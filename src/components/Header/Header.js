import React from "react";
import { Button } from "../Button/";
import { Logo } from "../Logo/";
import { SearchBar } from "../Search-Bar/";

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