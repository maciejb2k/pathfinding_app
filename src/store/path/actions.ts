import { createAction } from "store/actions";
import { GET_PATH_REQUEST, EXIT_PATH_PREVIEW_REQUEST } from "./constants";

export type Route = {
  startVertexKey: string;
  endVertexKey: string;
};

export const getPath = (payload: Route) => {
  return createAction(GET_PATH_REQUEST, payload);
};

export const exitPathPreview = () => {
  return createAction(EXIT_PATH_PREVIEW_REQUEST);
};
