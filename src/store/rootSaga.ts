import { all, fork } from "redux-saga/effects";

import { graphRootSaga } from "store/graph/sagas";
import { pathRootSaga } from "store/path/sagas";
import { searchRootSaga } from "store/search/sagas";

const sagas = [graphRootSaga, pathRootSaga, searchRootSaga];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
