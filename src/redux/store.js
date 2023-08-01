import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { themeReducer, RepositoriesReducer} from './slices';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    repositories: RepositoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;
