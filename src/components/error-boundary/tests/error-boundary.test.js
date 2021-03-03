import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../error-boundary';

const Bomb = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('💣');
  } else {
    return null;
  }
};

test('renders that there was a problem', () => {
  const { rerender } = render(<Bomb />, { wrapper: ErrorBoundary });
  rerender(<Bomb shouldThrow={true} />);

  console.log(typeof screen.getByRole('alert-error').textContent);
  expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot('"Something went wrong."');
  expect(screen.getByRole('alert-error').textContent.toString()).toMatch(/Error: 💣/i);
});
