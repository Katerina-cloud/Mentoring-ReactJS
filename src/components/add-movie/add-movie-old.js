import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { FormInput, FormDateInput, Button } from '../../components';
import { ACTION_RESET, ACTION_UPDATE, FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { setAddMovie, clearAddMovie, addMovie } from '../../store/actions/movies';

export const AddMovie = ({ handleAddSubmit }) => {
  const dispatchRedux = useDispatch();

  const initialState = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
    genres: '',
    release_date: undefined,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_UPDATE:
        // eslint-disable-next-line no-case-declarations
        const { field, value } = action.payload;
        // eslint-disable-next-line no-case-declarations
        let elementToUpdate = state[field];
        elementToUpdate = value;

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
      ...state,
      genres: state.genres.split(','),
      runtime: Number(state.runtime),
    };

    dispatchRedux(setAddMovie(movieToAdd));
    dispatchRedux(addMovie(movieToAdd));
    dispatchRedux(clearAddMovie(null));
    handleAddSubmit();
  };

  return (
    <>
      <div className="add-movie__input">
        <FormInput
          id="title"
          name="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Title"
          label="Title"
        />
      </div>
      <div className="add-movie__input">
        <FormInput
          id="poster_path"
          name="poster_path"
          value={state.URL}
          onChange={handleChange}
          placeholder="Movie URL here"
          label="Movie URL"
        />
      </div>
      <div className="add-movie__input">
        <FormInput
          id="overview"
          name="overview"
          value={state.overview}
          onChange={handleChange}
          placeholder="TitlOverview heree"
          label="Overview"
        />
      </div>
      <div className="add-movie__input">
        <FormInput
          id="runtime"
          name="runtime"
          value={state.runtime}
          onChange={handleChange}
          placeholder="Run time here"
          label="Run time"
        />
      </div>
      <div className="add-movie__input">
        <FormInput
          id="genres"
          name="genres"
          value={state.genres}
          onChange={handleChange}
          placeholder="Genres"
          label="Genres"
        />
      </div>
      <div className="add-movie__input">
        <FormDateInput
          name="release_date"
          value={state.release_date}
          onChange={handleChange}
          label="Release date"
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
