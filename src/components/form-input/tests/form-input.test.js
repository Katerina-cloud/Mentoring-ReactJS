import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormInput } from '../';

describe('FormInput', () => {
  it('snapshot', () => {
    const tree = render(<FormInput value="Title" placeholder="What do you want to watch?" />);
    expect(tree).toMatchSnapshot();
  });

  it('if label true render label', () => {
    render(<FormInput label="testLabel" />);

    const label = screen.getByText('testLabel');
    expect(label).toBeInTheDocument();
  });
});
