import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "store";

import ModalObjectInfo from "components/Modals/ModalObjectInfo";

describe("ModalObjectInfo.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <ModalObjectInfo />
      </Provider>
    );
  });
});
