import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../';

describe('Button', () => {
  it('snapshot', () => {
    const tree = render(<Button title="Test" color="red" textColor="gray" borderColor="red" />);
    expect(tree).toMatchSnapshot();
  });
  it('is expected to call onClick function', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock} title="Test Button" />);
    userEvent.click(getByText('Test Button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
