import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../';

describe('DateInput', () => {
  test('renders a text input with a label "Movie URL"', () => {
    render(
      <Formik>
        <Form>
          <TextInput
            label="Movie URL"
            name="poster_path"
            type="text"
            placeholder="Movie URL here"
          />
        </Form>
      </Formik>,
    );

    const input = screen.getByLabelText(/movie url/i);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should show validation error on touched', async () => {
    render(
      <Formik
        validationSchema={Yup.object({
          poster_path: Yup.string().url('Invalid url address').required('Required'),
        })}
      >
        <Form>
          <TextInput
            label="Movie URL"
            name="poster_path"
            type="text"
            placeholder="Movie URL here"
          />
        </Form>
      </Formik>,
    );

    const input = screen.getByLabelText(/movie url/i);

    await waitFor(async () => {
      fireEvent.blur(input);
    });

    const errorDiv = screen.queryByRole('error-message');

    expect(errorDiv).not.toBe(null);
    expect(errorDiv).toHaveTextContent('Required');
  });
});
