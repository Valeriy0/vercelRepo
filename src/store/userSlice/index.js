import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: '',
    },
  },
  reducers: {
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
    clearUser(state) {
      state.user = {};
    },
  },
});

export const userReducer = userSlice.reducer;

export const { updateUser, clearUser } = userSlice.actions;
