import { takeLatest, put, all, select } from "redux-saga/effects";

import { mapData } from "components/Map/mapData";
import { getGraphFromJSON } from "algorithms/graph/Utils";

import { AppState } from "store/rootReducer";
import { Action } from "store/actions";
import { Route } from "store/graph/actions";

import { getPathFromDijkstra } from "algorithms/graph/Utils";
import dijkstra from "algorithms/graph/Dijkstra";

import {
  INIT_GRAPH_REQUEST,
  INIT_GRAPH_SUCCESS,
  INIT_GRAPH_FAILED,
  GET_DIJKSTRA_REQUEST,
  GET_DIJKSTRA_SUCCESS,
  GET_DIJKSTRA_FAILED,
} from "./constants";
import Vertex from "algorithms/graph/Vertex";

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

export function* getPath(action: Action<Route>) {
  try {
    if (action.payload) {
      const { graph } = yield select((state: AppState) => state.graph);
      const { startVertexKey, endVertexKey } = action.payload;

      const startVertex: Vertex = graph.getVertices()[startVertexKey];
      const endVertex: Vertex = graph.getVertices()[endVertexKey];

      const { previousVertices } = dijkstra(graph, startVertex);
      const { vertices, edges } = getPathFromDijkstra(
        graph.getEdges(),
        previousVertices,
        endVertex
      );

      yield put({
        type: GET_DIJKSTRA_SUCCESS,
        payload: {
          vertices,
          edges,
        },
      });
    }
  } catch (error) {
    console.log(error);

    yield put({
      type: GET_DIJKSTRA_FAILED,
    });
  }
}

export function* graphRootSaga() {
  yield all([
    takeLatest(INIT_GRAPH_REQUEST, buildGraph),
    takeLatest(GET_DIJKSTRA_REQUEST, getPath),
  ]);
}
