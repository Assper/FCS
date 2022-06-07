import { createAction, createSlice } from "@reduxjs/toolkit";

export const name = "auth";

const initialState = {
  access: "",
  refresh: "",
  user: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    setData(state, action) {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.user = action.payload.user;
    },
  },
});

export const { reducer, actions } = authSlice;
export const { setData } = actions;

export const loginReq = createAction(`${name}/loginReq`);
export const registerReq = createAction(`${name}/registerReq`);
