import { Reducer } from "redux";
import { Action } from "store/actions";

import {
  SEARCH_PRODUCT_FAILED,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
} from "./constants";

type ProductType = {
  id: number;
  name: string;
  desc: string;
  objectId: string;
};

export type IState = {
  readonly isPending: boolean;
  readonly searchResult: ProductType | null;
};

export const initialState: IState = {
  isPending: false,
  searchResult: null,
};

export const search: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isPending: false,
        searchResult: action.payload,
      };
    case SEARCH_PRODUCT_FAILED:
      return {
        ...state,
        isPending: false,
        searchResult: {},
      };
    default:
      return state;
  }
};
