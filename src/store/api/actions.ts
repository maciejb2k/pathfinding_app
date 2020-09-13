import { createAction } from "store/actions";
import { FETCH_API_REQUEST } from "./constants";

export const fetchApiData = () => {
  return createAction(FETCH_API_REQUEST);
};
