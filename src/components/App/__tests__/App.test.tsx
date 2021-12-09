import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "store";

import App from "components/App";

describe("App.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
