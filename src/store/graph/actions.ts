import { createAction } from "store/actions";
import {
  INIT_GRAPH_REQUEST,
  SET_START_VERTEX,
  EDIT_START_VERTEX_TOGGLE,
} from "./constants";

export type Route = {
  startVertexKey: string;
  endVertexKey: string;
};

export const initGraph = () => {
  return createAction(INIT_GRAPH_REQUEST);
};

export const setStartVertex = (startVertex: string) => {
  return createAction(SET_START_VERTEX, startVertex);
};

export const toggleEditMode = () => {
  return createAction(EDIT_START_VERTEX_TOGGLE);
};
