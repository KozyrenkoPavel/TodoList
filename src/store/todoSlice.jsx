import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    user: {},
  },
  reducers: {
    passAuthentication(state, action) {
      state.user = action.payload;
    },
    outAccount(state) {
      state.user = {};
    },
  },
});

export const { passAuthentication, outAccount } = todoSlice.actions;

export default todoSlice.reducer;
