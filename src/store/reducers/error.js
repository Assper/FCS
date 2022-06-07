import { createSlice } from "@reduxjs/toolkit";

export const name = "error";

const initialState = {
  error: null,
};

const errorSlice = createSlice({
  name,
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = errorSlice;
export const { setError } = actions;
