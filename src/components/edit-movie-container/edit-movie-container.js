import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput, FormDateInput, Button } from '..';
import { ACTION_RESET, ACTION_UPDATE, FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { clearEditMovie } from '../../store/actions/movies';

export const EditMovieContainer = () => {
  const movieToEdit = useSelector((state) => state.moviesData.editMovie);
  const { id, title, runtime, overview, release_date } = movieToEdit;

  const initialState = {
    id: {
      name: 'id',
      value: id,
      placeholder: 'Id',
      label: 'Movie id',
    },
    title: {
      name: 'title',
      value: title,
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
      value: overview,
      placeholder: 'Overview here',
      label: 'Overview',
    },
    runTime: {
      name: 'runTime',
      value: runtime,
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchRedux = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION_UPDATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleEditReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
  };

  const handleEditSubmit = () => {
    dispatchRedux(clearEditMovie());
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
        <FormDateInput
          name="releaseDate"
          value={release_date}
          onChange={handleChange}
          label="Release date"
        />
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
