import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createBrowserHistory } from "history";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();

const configureStore = () => {
  const initialState = {};
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();
