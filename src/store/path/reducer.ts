import { Reducer } from "redux";
import { Action } from "store/actions";

import Vertex from "algorithms/graph/Vertex";
import Edge from "algorithms/graph/Edge";

import {
  GET_PATH_REQUEST,
  GET_PATH_SUCCESS,
  GET_PATH_FAILED,
  EXIT_PATH_PREVIEW_SUCCESS,
} from "./constants";

export type IState = {
  readonly isGenerating: boolean;
  readonly isPathPreview: boolean;
  readonly pathTimeline: GSAPTimeline | null;
  readonly dijkstra: {
    readonly vertices: Vertex[];
    readonly edges: Edge[];
  };
};

export const initialState: IState = {
  isGenerating: false,
  isPathPreview: false,
  pathTimeline: null,
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
    case GET_PATH_REQUEST:
      return {
        ...state,
        isGenerating: true,
      };
    case GET_PATH_SUCCESS:
      return {
        ...state,
        isGenerating: false,
        isPathPreview: true,
        pathTimeline: action.payload.timeline,
        dijkstra: {
          vertices: action.payload.vertices,
          edges: action.payload.edges,
        },
      };
    case GET_PATH_FAILED:
      return {
        ...state,
        isGenerating: false,
      };
    case EXIT_PATH_PREVIEW_SUCCESS:
      return {
        ...state,
        isPathPreview: false,
        pathTimeline: null,
        dijkstra: {
          vertices: [],
          edges: [],
        },
      };
    default:
      return state;
  }
};
