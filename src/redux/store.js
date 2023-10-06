import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { themeReducer, RepositoriesReducer, languageReducer} from './slices';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    repositories: RepositoriesReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;
