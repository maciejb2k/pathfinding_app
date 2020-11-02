import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "store";

import ModalSettings from "components/Modals/ModalSettings";

describe("ModalSettings.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <ModalSettings />
      </Provider>
    );
  });
});
