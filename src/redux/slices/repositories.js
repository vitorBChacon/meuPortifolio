import { createSlice } from '@reduxjs/toolkit';

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: [],
  reducers: {
    setRepositories: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setRepositories } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;