import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { DateInput } from '../';

describe('DateInput', () => {
  test('renders a date input with a label "Release date"', () => {
    render(
      <Formik>
        <Form>
          <DateInput
            label="Release date"
            name="release_date"
            type="date"
            placeholder="Release date"
          />
        </Form>
      </Formik>,
    );

    const input = screen.getByLabelText(/release date/i);
    expect(input).toHaveAttribute('type', 'date');
  });

  it('should show validation error on touched', async () => {
    render(
      <Formik
        validationSchema={Yup.object({
          release_date: Yup.string().required('Required'),
        })}
      >
        <Form>
          <DateInput
            label="Release date"
            name="release_date"
            type="date"
            placeholder="Release date"
          />
        </Form>
      </Formik>,
    );

    const input = screen.getByPlaceholderText('Release date');

    await waitFor(async () => {
      fireEvent.blur(input);
    });

    const errorDiv = screen.getByRole('error-message');

    expect(errorDiv).not.toBe(null);
    expect(errorDiv).toHaveTextContent('Required');
  });
});
