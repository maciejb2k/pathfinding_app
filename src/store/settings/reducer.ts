import { Reducer } from "redux";
import { SWITCH_LANG, SWITCH_THEME } from "./constants";
import { Action } from "store/actions";

export type IState = {
  readonly theme: string;
  readonly lang: string;
};

export const initialState: IState = {
  theme: localStorage.getItem("theme") || "light",
  lang: localStorage.getItem("lang") || "pl",
};

export const settings: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SWITCH_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
