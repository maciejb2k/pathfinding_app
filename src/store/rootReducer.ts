import { combineReducers } from "redux";
import { History } from "history";

import { settings, IState as SettingsState } from "./settings/reducer";
import { sidebar, IState as SidebarState } from "./sidebar/reducer";
import { modals, IState as ModalState } from "./modals/reducer";

export interface AppState {
  settings: SettingsState;
  sidebar: SidebarState;
  modals: ModalState;
}

const rootReducer = combineReducers<AppState>({
  settings,
  sidebar,
  modals,
});

export type RootState = ReturnType<typeof rootReducer>;

export default (history: History) => rootReducer;
