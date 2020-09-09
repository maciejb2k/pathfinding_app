import { Reducer } from "redux";
import { TOGGLE_SIDEBAR } from "./constants";
import { Action } from "store/actions";

export type IState = {
  readonly isOpen: boolean;
};

export const initialState: IState = {
  isOpen: true,
};

export const sidebar: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
