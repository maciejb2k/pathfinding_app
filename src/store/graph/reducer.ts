import { Reducer } from "redux";
import { Action } from "store/actions";

import Graph from "algorithms/graph/Graph";

import {
  INIT_GRAPH_REQUEST,
  INIT_GRAPH_SUCCESS,
  INIT_GRAPH_FAILED,
  SET_START_VERTEX,
} from "./constants";

export type IState = {
  readonly graph: Graph | null;
  readonly isGenerating: boolean;
  readonly startVertex: string;
};

export const initialState: IState = {
  graph: null,
  isGenerating: false,
  startVertex: "",
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
    case SET_START_VERTEX:
      return {
        ...state,
        startVertex: action.payload,
      };
    default:
      return state;
  }
};
