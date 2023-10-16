import { createSlice } from '@reduxjs/toolkit';

const pageTrackerSlice = createSlice({
  name: 'pageTracker',
  initialState: {
    currentPage: 'root',
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = pageTrackerSlice.actions;
export default pageTrackerSlice.reducer;