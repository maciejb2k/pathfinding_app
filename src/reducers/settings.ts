import { combineReducers } from "redux";
import { createReducer, ActionType } from "typesafe-actions";

import * as actions from "actions/settings";
import {
  SWITCH_THEME_REQUEST,
  SWITCH_THEME_SUCCESS,
  SWITCH_THEME_FAILED,
  SWITCH_LANG_REQUEST,
  SWITCH_LANG_SUCCESS,
  SWITCH_LANG_FAILED,
} from "constants/settings";

export type IState = Readonly<{
  theme: string;
  lang: string;
  isLoading: boolean;
}>;

export const initialState: IState = {
  theme: "light",
  lang: "pl",
  isLoading: false,
};

export type Actions = ActionType<typeof actions>;

export default createReducer<IState, Actions>(initialState)
  .handleType(SWITCH_THEME_REQUEST, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleType(SWITCH_LANG_REQUEST, (state, action) => ({
    ...state,
    isLoading: true,
  }));
