import { takeLatest, put, call } from "redux-saga/effects";
import { DI } from "../../../core/di";
import { confrimReq, setUser } from "../../reducers/auth";
import { tryCatch } from "../utils";

const service = DI.service.auth;

function* handleConfirm(action) {
  const confirm = service.confirm.bind(service);
  const data = yield call(confirm, action.payload);
  yield put(setUser(data));
}

export function* confirmSaga() {
  yield takeLatest(confrimReq.type, tryCatch(handleConfirm));
}
