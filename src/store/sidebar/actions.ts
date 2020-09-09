import { createAction } from "store/actions";
import { TOGGLE_SIDEBAR } from "./constants";

export const toggleSidebar = () => createAction(TOGGLE_SIDEBAR);
