import { createSlice } from '@reduxjs/toolkit';

export const matrixBSlice = createSlice({
  name: 'matrixB',
  initialState: {
    matrixB: {},
  },
  reducers: {
    updateMatrixB(state, action) {
      state.matrixB = { ...state.matrixB, ...action.payload };
    },
    clearMatrixB(state) {
      state.matrixB = {};
    },
  },
});

export const matrixBReducer = matrixBSlice.reducer;

export const { updateMatrixB, clearMatrixB } = matrixBSlice.actions;
