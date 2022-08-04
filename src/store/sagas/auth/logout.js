import { takeLatest, put, call } from "redux-saga/effects";
import { DI } from "../../../core/di";
import { confrimReq, clearState } from "../../reducers/auth";
import { tryCatch } from "../utils";

const service = DI.service.auth;

function* handleLogout(action) {
  const logout = service.logout.bind(service);
  const data = yield call(logout, action.payload);
  yield put(clearState(data));
}

export function* logoutSaga() {
  yield takeLatest(confrimReq.type, tryCatch(handleLogout));
}
