import { createAction } from "store/actions";
import { SEARCH_PRODUCT_REQUEST } from "./constants";

export const searchProduct = (productName: string) => {
  return createAction(SEARCH_PRODUCT_REQUEST, productName);
};
