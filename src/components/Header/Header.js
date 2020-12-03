import React from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { SearchBar } from "../Search-Bar/Search-Bar";

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