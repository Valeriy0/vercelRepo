import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from './asyncActions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
    clearUser(state) {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload, isLoading: false };
      })
      .addCase(getProfile.pending, (state, action) => {
        // Add user to the state array
        state.user = { ...state.user, ...action.payload, isLoading: true };
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.user = { ...action.payload, isLoading: false };
      });
  },
});

export const userReducer = userSlice.reducer;

export const { updateUser, clearUser } = userSlice.actions;
