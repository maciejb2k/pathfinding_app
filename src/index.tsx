import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "utils/serviceWorker";

import { Provider } from "react-redux";
import store from "store";
import "utils/i18n";

import App from "components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
