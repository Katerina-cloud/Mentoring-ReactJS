import React, { useReducer } from 'react';
import { FormInput, FormDateInput, Button } from '..';
import { ACTION_RESET, ACTION_UPDATE, FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';

const initialState = {
  id: {
    name: 'id',
    value: '',
    placeholder: 'Id',
    label: 'Movie id',
  },
  title: {
    name: 'title',
    value: '',
    placeholder: 'Title',
    label: 'Title',
  },
  URL: {
    name: 'URL',
    value: '',
    placeholder: 'Movie URL here',
    label: 'Movie URL',
  },
  overview: {
    name: 'overview',
    value: '',
    placeholder: 'Overview here',
    label: 'Overview',
  },
  runTime: {
    name: 'runTime',
    value: '',
    placeholder: 'Run time here',
    label: 'Run time',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_UPDATE:
      // eslint-disable-next-line no-case-declarations
      const { field, value } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const elementToUpdate = state[field];
      elementToUpdate.value = value;

      return {
        ...state,
        [field]: elementToUpdate,
      };

    case ACTION_RESET:
      return action.payload;

    default:
      break;
  }
};

export const EditMovieContainer = ({ toggleOpen, isOpen }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { id, title, URL, overview, runTime, releaseDate } = state;

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

  const handleEditReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
    console.log(state);
    console.log('handleEditReset!');
  };

  const handleEditSubmit = () => {
    console.log(state);
    toggleOpen(isOpen);
  };

  return (
    <>
      {Object.keys(state).map((inputName, index) => (
        <div className="edit-movie-container__input" key={index}>
          <FormInput
            id={inputName}
            name={state[inputName].name}
            value={state[inputName].value}
            onChange={handleChange}
            placeholder={state[inputName].placeholder}
            label={state[inputName].label}
          />
        </div>
      ))}
      <div className="edit-movie-container__input">
        <FormDateInput name="releaseDate" value="" onChange={handleChange} label="Release date" />
      </div>
      <div className="edit-movie-container__footer">
        <div className="edit-movie-container__button">
          <Button onClick={handleEditReset} title={FIRST_BUTTON_TITLE} color="gray" size="big" />
        </div>
        <div className="edit-movie-container__button">
          <Button onClick={handleEditSubmit} title={SECOND_BUTTON_TITLE} color="red" size="big" />
        </div>
      </div>
    </>
  );
};
