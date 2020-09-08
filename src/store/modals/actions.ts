import { createAction } from "store/actions";
import { OPEN_MODAL, CLOSE_MODAL } from "./constants";

export type ModalPayload<T> = {
  modalName: string;
  data?: T;
};

export const openModal = <T>(data: ModalPayload<T>) => {
  return createAction(OPEN_MODAL, data);
};

export const closeModal = () => createAction(CLOSE_MODAL);
