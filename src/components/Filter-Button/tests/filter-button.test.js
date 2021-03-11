import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterButton } from '../';

describe('FilterButton', () => {
  it('snapshot', () => {
    const tree = render(<FilterButton title="Crime" />);
    expect(tree).toMatchSnapshot();
  });

  it('is expected to call onClick function', () => {
    const onClickMock = jest.fn();
    render(<FilterButton onClick={onClickMock} title="Test Button" />);
    userEvent.click(screen.getByRole('button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
