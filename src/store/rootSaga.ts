import { all, fork } from "redux-saga/effects";

import { graphRootSaga } from "store/graph/sagas";
import { pathRootSaga } from "store/path/sagas";
import { searchRootSaga } from "store/search/sagas";
import { apiRootSaga } from "store/api/sagas";

const sagas = [graphRootSaga, pathRootSaga, searchRootSaga, apiRootSaga];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
