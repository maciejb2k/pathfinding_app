import { takeLatest, put, all } from "redux-saga/effects";

import { mapData } from "components/Map/mapData";
import { getGraphFromJSON } from "algorithms/graph/Utils";

import {
  INIT_GRAPH_REQUEST,
  INIT_GRAPH_SUCCESS,
  INIT_GRAPH_FAILED,
} from "./constants";

export function* buildGraph() {
  try {
    const graph = getGraphFromJSON(mapData);

    yield put({
      type: INIT_GRAPH_SUCCESS,
      payload: graph,
    });
  } catch (error) {
    yield put({
      type: INIT_GRAPH_FAILED,
    });
  }
}

export function* graphRootSaga() {
  yield all([takeLatest(INIT_GRAPH_REQUEST, buildGraph)]);
}
