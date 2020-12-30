import React, { useReducer } from 'react';
import { Modal, FormInput, FormDateInput } from '../../components';
import {
  FIRST_BUTTON_TITLE,
  SECOND_BUTTON_TITLE,
  ACTION_RESET,
  ACTION_UPDATE,
} from './consts';

const initialState = {
  id: '',
  title: '',
  URL: '',
  overview: '',
  runTime: '',
  releaseDate: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_UPDATE:
      // eslint-disable-next-line no-case-declarations
      const { field, value } = action.payload;

      return {
        ...state,
        [field]: value,
      };

    case ACTION_RESET:
      return action.payload;

    default:
      break;
  }
};

export const EditMovieModal = ({ isOpen, toggleOpen }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id, title, URL, overview, runTime, releaseDate } = state;

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION_UPDATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
    console.log(state);
  };

  const handleEditSubmit = () => {
    console.log(state);
    toggleOpen(isOpen);
  };

  const handleEditCancel = () => toggleOpen(isOpen);

  const handleEditReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
    console.log(state);
    console.log('handleEditReset!');
  };

  return (
    <>
      {isOpen && (
        <Modal
          title="EDIT MOVIE"
          firstButtonTitle={FIRST_BUTTON_TITLE}
          secondButtonTitle={SECOND_BUTTON_TITLE}
          onSubmit={handleEditSubmit}
          onReset={handleEditReset}
          onCancel={handleEditCancel}
        >
          <form>
            <div className="edit-movie__input">
              <FormInput
                name="id"
                value={id}
                onChange={handleChange}
                placeholder="Id"
                label="Movie id"
              />
            </div>
            <div className="edit-movie__input">
              <FormInput
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
                label="Title"
              />
            </div>
            <div className="edit-movie__input">
              <FormInput
                name="URL"
                value={URL}
                onChange={handleChange}
                placeholder="Movie URL here"
                label="Movie URL"
              />
            </div>
            <div className="edit-movie__input">
              <FormInput
                name="overview"
                value={overview}
                onChange={handleChange}
                placeholder="Overview here"
                label="Overview"
              />
            </div>
            <div className="edit-movie__input">
              <FormInput
                name="runTime"
                value={runTime}
                onChange={handleChange}
                placeholder="Run time here"
                label="Run time"
              />
            </div>
            <div className="edit-movie__input">
              <FormDateInput
                name="releaseDate"
                value={releaseDate}
                onChange={handleChange}
                label="Release date"
              />
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
