import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from '../../redux/reducers';
import { createMemoryHistory } from 'history';
import ErrorBoundary from '../../utils/ErrorBoundary';

export const renderWithRouterAndRedux = (component, initialState, route = '/', mockStore) => {
  const store = mockStore || configureStore({
    reducer,
    preloadedState: initialState,
    middleware: [thunk]
  });

  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={store}>
        <ErrorBoundary>
          <MemoryRouter history={history}>{component}</MemoryRouter>
        </ErrorBoundary>
      </Provider>
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;
