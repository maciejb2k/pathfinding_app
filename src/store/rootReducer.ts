import { combineReducers } from "redux";
import { History } from "history";

import settingsReducer from "reducers/settings";

export interface State {}

const rootReducer = combineReducers<State>({
  settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default (history: History) => rootReducer;
