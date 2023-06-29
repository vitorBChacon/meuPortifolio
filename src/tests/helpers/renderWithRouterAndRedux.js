import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {  configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from '../../redux/reducers';

export const renderWithRouterAndRedux = (component, initialState, route = '/') => {
  const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: [thunk]
  });
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>
          {component}
        </Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;