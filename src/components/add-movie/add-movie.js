import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { setAddMovie, clearAddMovie, addMovie } from '../../store/actions/movies';

export const AddMovie = ({ handleAddSubmit }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        title: '',
        poster_path: '',
        overview: '',
        runtime: '',
        genres: '',
        release_date: '',
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        poster_path: Yup.string().url('Invalid url address').required('Required'),
        overview: Yup.string().required('Required'),
        runtime: Yup.number('Runtime mast be an integer')
          .min(0, 'Runtime mast be an integer bigger then 0')
          .integer('Runtime mast be an integer')
          .required('Required'),
        genres: Yup.string().required('Required'),
        release_date: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        console.log('values', values);
        const movieToAdd = {
          ...values,
          genres: values.genres.split(' '),
          runtime: Number(values.runtime),
        };
        console.log('movieToAdd', movieToAdd);
        dispatch(setAddMovie(movieToAdd));
        dispatch(addMovie(movieToAdd));
        dispatch(clearAddMovie(null));
        handleAddSubmit();
      }}
    >
      <Form>
        <div className="add-movie">
          <label htmlFor="Title" className="add-movie__label">
            Title
          </label>
          <Field className="add-movie__text" name="title" type="text" placeholder="Title" />
          <ErrorMessage
            name="title"
            render={(msg) => <div className="add-movie__error">{msg}</div>}
          />
        </div>

        <div className="add-movie">
          <label htmlFor="poster_path" className="add-movie__label">
            Movie URL
          </label>
          <Field
            className="add-movie__text"
            name="poster_path"
            type="url"
            placeholder="Movie URL here"
          />
          <ErrorMessage
            name="poster_path"
            render={(msg) => <div className="add-movie__error">{msg}</div>}
          />
        </div>

        <div className="add-movie">
          <label htmlFor="genres" className="add-movie__label">
            Genre
          </label>
          <Field name="genres" as="select" className="add-movie__select">
            <option value="comedy">comedy</option>
            <option value="crime">crime</option>
            <option value="documentary">documentary</option>
            <option value="horror">horror</option>
          </Field>
        </div>
        <div className="add-movie">
          <label htmlFor="overview" className="add-movie__label">
            Overview
          </label>
          <Field className="add-movie__text" name="overview" type="text" placeholder="Overview" />
          <ErrorMessage
            name="overview"
            render={(msg) => <div className="add-movie__error">{msg}</div>}
          />
        </div>

        <div className="add-movie">
          <label htmlFor="runtime" className="add-movie__label">
            Run time
          </label>
          <Field
            className="add-movie__text"
            name="runtime"
            type="runtime"
            placeholder="Run time here"
          />
          <ErrorMessage
            name="runtime"
            render={(msg) => <div className="add-movie__error">{msg}</div>}
          />
        </div>

        <div className="add-movie">
          <label htmlFor="release_date" className="add-movie__label">
            Release date
          </label>
          <Field className="add-movie__date" name="release_date" type="date" />
          <ErrorMessage
            name="release_date"
            render={(msg) => <div className="add-movie__error">{msg}</div>}
          />
        </div>

        <div className="edit-movie-container__footer">
          <div className="edit-movie-container__button">
            <Button type="reset" title={FIRST_BUTTON_TITLE} color="gray" size="big" />
          </div>
          <div className="edit-movie-container__button">
            <Button type="submit" title={SECOND_BUTTON_TITLE} color="red" size="big" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};
