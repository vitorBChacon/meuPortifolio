import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkThemeOn: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkThemeOn = !state.isDarkThemeOn;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
