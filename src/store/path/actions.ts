import { createAction } from "store/actions";
import { GET_DIJKSTRA_REQUEST } from "./constants";

export type Route = {
  startVertexKey: string;
  endVertexKey: string;
};

export const getPath = () => createAction(GET_DIJKSTRA_REQUEST);
