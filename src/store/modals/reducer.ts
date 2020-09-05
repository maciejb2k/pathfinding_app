import { Reducer } from "redux";
import { OPEN_MODAL, CLOSE_MODAL } from "./constants";
import { Action } from "store/actions";

export type IState = {
  readonly activeModal: string;
  readonly isOpen: boolean;
};

export const initialState: IState = {
  activeModal: "",
  isOpen: false,
};

export const modals: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        activeModal: action.payload,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        activeModal: "",
        isOpen: false,
      };
    default:
      return state;
  }
};
