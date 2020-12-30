import React, { useState } from 'react';
import { Button, Logo, SearchBar, AddMovieModal } from "../../components/";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    console.log(isOpen);
    setOpen(true);
    console.log(isOpen);
  }

  const handleModalToggle = (isOpen) => {
    setOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__add-movie">
        <Logo />
        <div className="header__button">
          <Button onClick={openModal} title="+Add movie" color="gray" textColor="red" />
        </div>
          <AddMovieModal isOpen={isOpen} toggleOpen={handleModalToggle} ></AddMovieModal>
      </div>
      <div className="header__search-bar">
        <SearchBar />
      </div>
    </header>
  )
}