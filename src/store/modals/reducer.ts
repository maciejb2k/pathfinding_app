import { Reducer } from "redux";
import { OPEN_MODAL, CLOSE_MODAL } from "./constants";
import { Action } from "store/actions";

export type IState = {
  readonly activeModal: string;
  readonly isOpen: boolean;
  readonly data: any;
};

export const initialState: IState = {
  activeModal: "",
  isOpen: false,
  data: null,
};

export const modals: Reducer<IState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        activeModal: action.payload.modalName,
        data: action.payload.data,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        activeModal: "",
        data: null,
        isOpen: false,
      };
    default:
      return state;
  }
};
