import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Button, TextInput, DateInput, SelectInput } from '../../components';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';

export const EditMovie = ({ handleEditSubmit }) => {
  const movieToEdit = useSelector((state) => state.moviesData.editMovie);
  const { id, title, runtime, overview, poster_path, release_date, genres } = movieToEdit;

  return (
    <Formik
      initialValues={{
        id,
        title,
        poster_path,
        overview,
        runtime,
        genres: genres ? genres[0] : '',
        release_date,
      }}
      validationSchema={Yup.object({
        id: Yup.number('Id mast be an integer')
          .integer('Id must be an integer')
          .required('Required'),
        title: Yup.string().required('Required'),
        poster_path: Yup.string().url('Invalid url address').required('Required'),
        overview: Yup.string().required('Required'),
        runtime: Yup.number('Runtime mast be an integer')
          .min(0, 'Runtime must be an integer bigger then 0')
          .integer('Runtime must be an integer')
          .required('Required'),
        genres: Yup.string().required('Required'),
        release_date: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        const movieEdit = {
          ...values,
          genres: values.genres.split(' '),
          runtime: Number(values.runtime),
        };
        handleEditSubmit(movieEdit);
      }}
    >
      <Form>
        <div className="edit-movie__input">
          <TextInput label="Id" name="id" type="text" placeholder="Id" />
        </div>
        <div className="edit-movie__input">
          <TextInput label="Title" name="title" type="text" placeholder="Title" />
        </div>
        <div className="edit-movie__input">
          <TextInput
            label="Movie URL"
            name="poster_path"
            type="text"
            placeholder="Movie URL here"
          />
        </div>
        <div className="edit-movie__input">
          <SelectInput label="Genre" name="genres">
            <option value="comedy">comedy</option>
            <option value="crime">crime</option>
            <option value="documentary">documentary</option>
            <option value="horror">horror</option>
          </SelectInput>
        </div>
        <div className="edit-movie__input">
          <TextInput label="Overview" name="overview" type="text" placeholder="Overview" />
        </div>
        <div className="edit-movie__input">
          <TextInput label="Runtime" name="runtime" type="text" placeholder="Runtime" />
        </div>
        <div className="edit-movie__input">
          <DateInput
            label="Release date"
            name="release_date"
            type="date"
            placeholder="Release date"
          />
        </div>
        <div className="edit-movie__footer">
          <div className="edit-movie__button">
            <Button type="reset" title={FIRST_BUTTON_TITLE} color="gray" size="big" />
          </div>
          <div className="edit-movie__button">
            <Button type="submit" title={SECOND_BUTTON_TITLE} color="red" size="big" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

EditMovie.propTypes = {
  handleEditSubmit: PropTypes.func,
};
