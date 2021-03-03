import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { DottedIconDropdown } from '../';

describe('DottedIconDropdown', () => {
  it('snapshot', () => {
    const tree = render(<DottedIconDropdown />);
    expect(tree).toMatchSnapshot();
  });

  // it('show dropdown on button click', () => {
  //   const showDropdown = jest.fn();
  //   render(<DottedIconDropdown />);

  //   const icon = screen.queryByRole('toggle-dropdown');
  //   console.log(icon);
  //   userEvent.click(icon);
  //   expect(showDropdown).toHaveBeenCalledTimes(1);
  // });
});
