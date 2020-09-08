import { createAction } from "store/actions";
import { INIT_GRAPH_REQUEST, GET_DIJKSTRA_REQUEST } from "./constants";

export type Route = {
  startVertexKey: string;
  endVertexKey: string;
};

export const initGraph = () => createAction(INIT_GRAPH_REQUEST);

export const getDijkstra = (data: Route) =>
  createAction(GET_DIJKSTRA_REQUEST, data);
