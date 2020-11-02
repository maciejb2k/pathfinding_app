import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "store";

import Layout from "containers/Layout";

describe("Layout.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  });
});
