import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button, TextInput, DateInput } from '../../components';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { setAddMovie, clearAddMovie, addMovie } from '../../store/actions/movies';
import { SelectInput } from '../ select-input/ select-input';

export const AddMovie = ({ handleAddSubmit }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        title: '',
        poster_path: '',
        overview: '',
        runtime: '',
        genres: 'comedy',
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
        const movieToAdd = {
          ...values,
          genres: values.genres.split(' '),
          runtime: Number(values.runtime),
        };
        dispatch(setAddMovie(movieToAdd));
        dispatch(addMovie(movieToAdd));
        dispatch(clearAddMovie(null));
        handleAddSubmit();
      }}
    >
      <Form>
        <div className="add-movie__input">
          <TextInput label="Title" name="title" type="text" placeholder="Title" />
        </div>
        <div className="add-movie__input">
          <TextInput
            label="Movie URL"
            name="poster_path"
            type="text"
            placeholder="Movie URL here"
          />
        </div>
        <div className="add-movie__input">
          <SelectInput label="Genre" name="genres">
            <option value="comedy">comedy</option>
            <option value="crime">crime</option>
            <option value="documentary">documentary</option>
            <option value="horror">horror</option>
          </SelectInput>
        </div>
        <div className="add-movie__input">
          <TextInput label="Overview" name="overview" type="text" placeholder="Overview" />
        </div>
        <div className="add-movie__input">
          <TextInput label="Runtime" name="runtime" type="text" placeholder="Runtime" />
        </div>
        <div className="add-movie__input">
          <DateInput
            label="Release date"
            name="release_date"
            type="date"
            placeholder="Release date"
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
