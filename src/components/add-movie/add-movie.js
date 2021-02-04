import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { FormInput, Button } from '../../components';
// import { FormInput, FormDateInput, Button } from '../../components';
import { ACTION_RESET, ACTION_UPDATE, FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { setAddMovie } from '../../store/actions/movies';

export const AddMovie = ({ handleAddSubmit }) => {
  const dispatchRedux = useDispatch();

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
      id: state.id.value,
      title: state.title.value,
      // genres: state.genres.value,
      overview: state.overview.value,
      poster_path: state.URL.value,
      runtime: state.runTime.value,
    };

    dispatchRedux(setAddMovie(movieToAdd));
    handleAddSubmit();
  };
  console.log('state', state);
  return (
    <>
      {Object.keys(state).map((inputName, index) => (
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
      {/* <div className="add-movie__input">
        <FormDateInput
          name="releaseDate"
          value={releaseDate}
          onChange={handleChange}
          label="Release date"
        />
      </div> */}
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
