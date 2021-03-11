import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { SelectInput } from '../';

describe('SelectInput', () => {
  it('renders a select with a label "Genre"', () => {
    render(
      <Formik>
        <Form>
          <SelectInput label="Genre" name="genres">
            <option value="comedy">comedy</option>
            <option value="crime">crime</option>
            <option value="documentary">documentary</option>
            <option value="horror">horror</option>
          </SelectInput>
        </Form>
      </Formik>,
    );

    const input = screen.getByLabelText(/Genre/i);
    expect(input).toHaveAttribute('name', 'genres');
  });
});
