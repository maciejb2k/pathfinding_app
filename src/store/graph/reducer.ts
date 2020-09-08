import { Reducer } from "redux";
import { Action } from "store/actions";

import Graph from "algorithms/graph/Graph";
import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";

import {
  INIT_GRAPH_REQUEST,
  INIT_GRAPH_SUCCESS,
  INIT_GRAPH_FAILED,
  GET_DIJKSTRA_REQUEST,
  GET_DIJKSTRA_SUCCESS,
  GET_DIJKSTRA_FAILED,
} from "./constants";

export type IState = {
  readonly graph: Graph | null;
  readonly isGenerating: boolean;
  readonly dijkstra: {
    readonly vertices: Vertex[];
    readonly edges: Edge[];
  };
};

export const initialState: IState = {
  graph: null,
  isGenerating: false,
  dijkstra: {
    vertices: [],
    edges: [],
  },
};

export const graph: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case INIT_GRAPH_REQUEST:
      return {
        ...state,
        isGenerating: true,
      };
    case INIT_GRAPH_SUCCESS:
      return {
        ...state,
        isGenerating: false,
        graph: action.payload,
      };
    case INIT_GRAPH_FAILED:
      return {
        ...state,
        isGenerating: false,
      };
    case GET_DIJKSTRA_REQUEST:
      return {
        ...state,
        isGenerating: true,
      };
    case GET_DIJKSTRA_SUCCESS:
      return {
        ...state,
        isGenerating: false,
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
    default:
      return state;
  }
};
