import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextInput, DateInput, SelectInput } from '../../components';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';

export const AddMovie = ({ handleAddSubmit }) => {
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
        runtime: Yup.number('Runtime must be an integer')
          .min(0, 'Runtime must be an integer bigger then 0')
          .integer('Runtime must be an integer')
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
        handleAddSubmit(movieToAdd);
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
        <div className="add-movie__footer">
          <div className="add-movie__button">
            <Button type="reset" title={FIRST_BUTTON_TITLE} color="gray" size="big" />
          </div>
          <div className="add-movie__button">
            <Button type="submit" title={SECOND_BUTTON_TITLE} color="red" size="big" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};
