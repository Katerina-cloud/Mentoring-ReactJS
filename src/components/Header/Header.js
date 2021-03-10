import React from 'react';
import PropTypes from 'prop-types';
import { Button, Logo, SearchBar } from '../../components/';

export const Header = ({ openAddMovie }) => {
  return (
    <header className="header">
      <div className="header__add-movie">
        <Logo />
        <div className="header__button">
          <Button onClick={openAddMovie} title="+Add movie" color="gray" textColor="red" />
        </div>
      </div>
      <div className="header__search-bar">
        <SearchBar />
      </div>
    </header>
  );
};

Header.propTypes = {
  openAddMovie: PropTypes.func,
};
