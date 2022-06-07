import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root";
import { reducer as errorReducer, name as error } from "./reducers/error";
import { reducer as authReducer, name as auth } from "./reducers/auth";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  [error]: errorReducer,
  [auth]: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
