import { createAction } from "store/actions";
import { OPEN_MODAL, CLOSE_MODAL } from "./constants";

export const openModal = (modalName: string) => {
  return createAction(OPEN_MODAL, modalName);
};

export const closeModal = () => createAction(CLOSE_MODAL);
