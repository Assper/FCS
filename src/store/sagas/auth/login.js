import { takeLatest, put, call } from "redux-saga/effects";
import { DI } from "../../../core/di";
import { loginReq, setData } from "../../reducers/auth";
import { tryCatch } from "../utils";

const service = DI.service.auth;

function* handleLogin(action) {
  const login = service.login.bind(service);
  const data = yield call(login, action.payload);
  yield put(setData(data));
}

export function* loginSaga() {
  yield takeLatest(loginReq.type, tryCatch(handleLogin));
}
