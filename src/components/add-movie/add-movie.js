import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { FormInput, FormDateInput, Button } from '../../components';
import { ACTION_RESET, ACTION_UPDATE, FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { setAddMovie, clearAddMovie, addMovie } from '../../store/actions/movies';

export const AddMovie = ({ handleAddSubmit }) => {
  const dispatchRedux = useDispatch();

  const initialState = {
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
    genres: {
      name: 'genres',
      value: '',
      placeholder: '',
      label: 'Genres',
    },
    release_date: {
      name: 'release_date',
      value: '',
      placeholder: '',
      label: 'Release date',
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

  const handleAddReset = () => {
    dispatch({ type: ACTION_RESET, payload: initialState });
  };

  const handleAddSubmitForm = () => {
    const movieToAdd = {
      title: state.title.value,
      genres: state.genres.value.split(','),
      overview: state.overview.value,
      poster_path: state.URL.value,
      runtime: Number(state.runTime.value),
      release_date: state.release_date.value,
    };

    dispatchRedux(setAddMovie(movieToAdd));
    dispatchRedux(addMovie(movieToAdd));
    dispatchRedux(clearAddMovie(null));
    handleAddSubmit();
  };

  return (
    <>
      {Object.keys(state)
        .filter((input) => input !== 'release_date')
        .map((inputName, index) => (
          <div className="add-movie__input" key={index}>
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
      <div className="add-movie__input">
        <FormDateInput
          name={state.release_date.name}
          value={state.release_date.value}
          onChange={handleChange}
          label={state.release_date.label}
        />
      </div>
      <div className="edit-movie-container__footer">
        <div className="edit-movie-container__button">
          <Button onClick={handleAddReset} title={FIRST_BUTTON_TITLE} color="gray" size="big" />
        </div>
        <div className="edit-movie-container__button">
          <Button
            onClick={handleAddSubmitForm}
            title={SECOND_BUTTON_TITLE}
            color="red"
            size="big"
          />
        </div>
      </div>
    </>
  );
};
