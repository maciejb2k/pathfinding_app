import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "store";

import Sidebar from "components/Sidebar";

describe("Sidebar.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
  });
});
