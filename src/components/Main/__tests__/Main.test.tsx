import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "store";

import Main from "components/Main";

describe("Main.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });
});
