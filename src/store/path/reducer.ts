import { Reducer } from "redux";
import { Action } from "store/actions";

import Graph from "algorithms/graph/Graph";
import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";

import {
  GET_DIJKSTRA_REQUEST,
  GET_DIJKSTRA_SUCCESS,
  GET_DIJKSTRA_FAILED,
  EXIT_PATH_PREVIEW,
} from "./constants";

export type IState = {
  readonly isGenerating: boolean;
  readonly isPathPreview: boolean;
  readonly dijkstra: {
    readonly vertices: Vertex[];
    readonly edges: Edge[];
  };
};

export const initialState: IState = {
  isGenerating: false,
  isPathPreview: false,
  dijkstra: {
    vertices: [],
    edges: [],
  },
};

export const path: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case GET_DIJKSTRA_REQUEST:
      return {
        ...state,
        isGenerating: true,
      };
    case GET_DIJKSTRA_SUCCESS:
      return {
        ...state,
        isGenerating: false,
        isPathPreview: true,
        dijkstra: {
          vertices: action.payload.vertices,
          edges: action.payload.edges,
        },
      };
    case GET_DIJKSTRA_FAILED:
      return {
        ...state,
        isGenerating: false,
      };
    case EXIT_PATH_PREVIEW:
      return {
        ...state,
        isPathPreview: false,
      };
    default:
      return state;
  }
};
