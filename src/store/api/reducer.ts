import { Reducer } from "redux";
import { Action } from "store/actions";

import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_FAILED,
} from "./constants";

export type ProductsApiType = {
  id: number;
  name: string;
  price: string;
  desc: string;
  objectId: string;
};

export type CategoriesApiType = {
  id: number;
  name: string;
};

export type ObjectToCategoryApiType = {
  id: number;
  categoryId: number;
  objectId: string;
};

export type IState = {
  readonly products: Array<ProductsApiType>;
  readonly categories: Array<CategoriesApiType>;
  readonly objectToCategory: Array<ObjectToCategoryApiType>;
  readonly error: Error | null;
  readonly isFetching: boolean;
};

export const initialState: IState = {
  products: [],
  categories: [],
  objectToCategory: [],
  isFetching: false,
  error: null,
};

export const api: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload.products,
        categories: action.payload.categories,
        objectToCategory: action.payload.objectToCategory,
      };
    case FETCH_API_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
