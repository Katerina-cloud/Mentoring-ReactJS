import React, { useState } from "react";
import {  Modal, FormInput, FormDateInput } from '../../components';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';

export const EditMovieModal = ({ isOpen, toggleOpen}) => {
  const defaultState = {
    id: "",
    title: "",
    URL: "",
    overview: "",
    runTime: "",
    releaseDate: "",
  };
  const [formState, setFormState] = useState(defaultState);

  function handleChange (event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log("name", name, "value", value)

    setFormState({
      [name]: value
    });
  };

  const handleEditSubmit = () => {
    console.log(formState);
    toggleOpen(isOpen);
  }
  const handleEditCancel = () => toggleOpen(isOpen);

  const handleEditReset = () => {
    setFormState({
      defaultState
    });
    console.log('handleEditReset!');
    console.log(formState);
  };
  
	return (
		<>
			{isOpen && <Modal
				title="EDIT MOVIE"
				firstButtonTitle = { FIRST_BUTTON_TITLE }
				secondButtonTitle = { SECOND_BUTTON_TITLE }
				onSubmit={handleEditSubmit}
				onReset={handleEditReset}
				onCancel={handleEditCancel}
		>
      <form>
        <div className="edit-movie__input">
          <FormInput name="id" value={formState.id} onChange={handleChange} placeholder="Id" label="Movie id"></FormInput>
        </div>
        <div className="edit-movie__input">
          <FormInput name="title" value={formState.title} onChange={handleChange} placeholder="Title" label="Title"></FormInput>
        </div>
        <div className="edit-movie__input">
          <FormInput name="URL" value={formState.URL} onChange={handleChange} placeholder="Movie URL here" label="Movie URL"></FormInput>
        </div>
        <div className="edit-movie__input">
          <FormInput name="overview" value={formState.overview} onChange={handleChange} placeholder="Overview here" label="Overview"></FormInput>
        </div>
        <div className="edit-movie__input">
          <FormInput name="runTime" value={formState.runTime} onChange={handleChange} placeholder="Run time here" label="Run time"></FormInput>
        </div>
        <div className="edit-movie__input">
          <FormDateInput name="releaseDate" value={formState.releaseDate} onChange={handleChange} label="Release date"></FormDateInput>
        </div>
      </form>
		</Modal>}
		</>
	);
};