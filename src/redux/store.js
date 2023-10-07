import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { themeReducer, RepositoriesReducer, languageReducer, pageTrackerReducer} from './slices';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    repositories: RepositoriesReducer,
    language: languageReducer,
    pageTracker: pageTrackerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;
