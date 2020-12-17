import React, { useState, useRef } from 'react';
import { Button, Logo, SearchBar, Modal, AddMovieModal } from "../../components/";
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';

export const Header = () => {
  const formRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    console.log(isOpen);
    setOpen(true);
    console.log(isOpen);
  }

  const handleSubmit = () => {
    const form = formRef.current;
    console.log(form.state)
    console.log('Submit function!');
    // setOpen(false);
  }

  const handleCancel = () => {
    console.log('Cancel function!');
    setOpen(false);
  }
  const defaultState = {
    title: "",
    URL: "",
    overview: "",
    runTime: "",
    releaseDate: "",
  };
  const handleReset = () => {
    const form = formRef.current;
    form.setState(defaultState);
    console.log('Reset function!');
    console.log(form.state);
    console.log('Reset function!');
  };

  return (
    <>
      <div className="header__add-movie">
        <Logo />
        <div className="header__button">
          <Button onClick={openModal} title="+Add movie" color="gray" textColor="red" />
        </div>
        <Modal
          title="ADD MOVIE"
          isOpen={isOpen}
          firstButtonTitle = { FIRST_BUTTON_TITLE }
          secondButtonTitle = { SECOND_BUTTON_TITLE }
          onCancel={handleCancel}
          onReset={handleReset}
          onSubmit={handleSubmit}
        >
          <AddMovieModal ref={formRef}></AddMovieModal>
        </Modal>
      </div>
      <div className="header__search-bar">
        <SearchBar />
      </div>
    </>
  )
}