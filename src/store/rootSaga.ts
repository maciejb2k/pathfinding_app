import { all, fork } from "redux-saga/effects";

import { graphRootSaga } from "store/graph/sagas";

const sagas = [graphRootSaga];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
