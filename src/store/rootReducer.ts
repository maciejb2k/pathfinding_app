import { combineReducers } from "redux";
import { History } from "history";

import { settings, IState as SettingsState } from "./settings/reducer";
import { sidebar, IState as SidebarState } from "./sidebar/reducer";
import { modals, IState as ModalState } from "./modals/reducer";
import { graph, IState as GraphState } from "./graph/reducer";
import { path, IState as PathState } from "./path/reducer";
import { search, IState as SearchState } from "./search/reducer";

export interface AppState {
  settings: SettingsState;
  sidebar: SidebarState;
  modals: ModalState;
  graph: GraphState;
  path: PathState;
  search: SearchState;
}

const rootReducer = combineReducers<AppState>({
  settings,
  sidebar,
  modals,
  graph,
  path,
  search,
});

export type RootState = ReturnType<typeof rootReducer>;

export default (history: History) => rootReducer;
