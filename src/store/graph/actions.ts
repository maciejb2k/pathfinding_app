import { createAction } from "store/actions";
import { INIT_GRAPH_REQUEST, SET_START_VERTEX } from "./constants";

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
