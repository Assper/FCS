import { createAction, createSlice } from "@reduxjs/toolkit";

export const name = "auth";

const initialState = {
  user: null,
  verificationId: "",
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.verificationId = "";
    },
    setVerificationId(state, action) {
      state.verificationId = action.payload;
    },
    clearState(state) {
      state.verificationId = "";
      state.user = null;
    },
  },
});

export const { reducer, actions } = authSlice;
export const { setUser, setVerificationId, clearState } = actions;

export const loginReq = createAction(`${name}/loginReq`);
export const confrimReq = createAction(`${name}/confrimReq`);
export const logoutReq = createAction(`${name}/logoutReq`);
