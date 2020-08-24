import { all, fork } from "redux-saga/effects";

const sagas: any[] = [];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
