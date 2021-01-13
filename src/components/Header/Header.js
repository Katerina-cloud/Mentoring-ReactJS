import React, { useState } from 'react';
import { Button, Logo, SearchBar, AddMovieModal } from '../../components/';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const handleModalToggle = (isOpen) => {
    setModalOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__add-movie">
        <Logo />
        <div className="header__button">
          <Button onClick={openModal} title="+Add movie" color="gray" textColor="red" />
        </div>
        <AddMovieModal isOpen={isModalOpen} toggleOpen={handleModalToggle} />
      </div>
      <div className="header__search-bar">
        <SearchBar />
      </div>
    </header>
  );
};
