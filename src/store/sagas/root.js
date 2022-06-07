import { all, call, spawn } from "redux-saga/effects";
import { authSagas } from "./auth";

const loop = (saga) => {
  return spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e) {
        console.error(e);
      }
    }
  });
};

export function* rootSaga() {
  const sagas = [...authSagas];
  yield all(sagas.map(loop));
}
