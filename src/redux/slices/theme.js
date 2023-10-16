import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkThemeOn: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkThemeOn = !state.isDarkThemeOn;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
