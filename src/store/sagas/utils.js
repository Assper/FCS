import { put } from "redux-saga/effects";
import { setError } from "../reducers/error";

export const tryCatch = (method) => {
  return function* (action) {
    try {
      yield method(action);
    } catch (e) {
      console.error(e);
      yield put(setError(e.message));
    }
  };
};
