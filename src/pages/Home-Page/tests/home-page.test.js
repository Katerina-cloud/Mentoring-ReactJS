import React from 'react';
import { render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from '../';
import { Provider } from 'react-redux';
import { store } from '../../../store/index';

describe('HomePage', () => {
  it('snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    expect(tree).toMatchSnapshot();
  });
});
