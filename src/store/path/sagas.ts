import { takeLatest, put, all, select } from "redux-saga/effects";

import { AppState } from "store/rootReducer";
import { Action } from "store/actions";
import { Route } from "store/graph/actions";

import { gsap } from "gsap";
import { getPathFromDijkstra } from "algorithms/graph/Utils";
import dijkstra from "algorithms/graph/Dijkstra";

import {
  GET_PATH_REQUEST,
  GET_PATH_SUCCESS,
  GET_PATH_FAILED,
  EXIT_PATH_PREVIEW_REQUEST,
  EXIT_PATH_PREVIEW_SUCCESS,
} from "./constants";
import Vertex from "algorithms/graph/Vertex";

export function* getPath(action: Action<Route>) {
  try {
    if (action.payload) {
      const { graph, startVertex: startVertexKey } = yield select(
        (state: AppState) => state.graph
      );
      const { endVertexKey } = action.payload;

      const startVertex: Vertex = graph.getVertices()[startVertexKey];
      const endVertex: Vertex = graph.getVertices()[endVertexKey];

      const { previousVertices } = dijkstra(graph, startVertex);
      const { vertices, edges } = getPathFromDijkstra(
        graph.getEdges(),
        previousVertices,
        endVertex
      );

      const timeline = gsap.timeline({
        paused: true,
      });

      yield put({
        type: GET_PATH_SUCCESS,
        payload: {
          vertices,
          edges,
          timeline,
        },
      });
    }
  } catch (error) {
    yield put({
      type: GET_PATH_FAILED,
    });
  }
}
export function* resetPath() {
  try {
    const { pathTimeline } = yield select((state: AppState) => state.path);
    pathTimeline.reverse();

    yield put({
      type: EXIT_PATH_PREVIEW_SUCCESS,
    });
  } catch (error) {}
}

export function* pathRootSaga() {
  yield all([takeLatest(GET_PATH_REQUEST, getPath)]);
  yield all([takeLatest(EXIT_PATH_PREVIEW_REQUEST, resetPath)]);
}
