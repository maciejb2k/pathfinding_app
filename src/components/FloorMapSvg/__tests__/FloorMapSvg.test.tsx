import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "store";

import FloorMapSvg from "components/FloorMapSvg";

describe("FloorMap.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <FloorMapSvg />
      </Provider>
    );
  });

  it("should open modal", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <FloorMapSvg />
      </Provider>
    );

    const test_obj = getByTestId("test_o_43");
    expect(test_obj).toBeInTheDocument();

    fireEvent.click(test_obj);
    const fetchStore = store.getState();
    expect(fetchStore.modals.activeModal).toBe("MODAL_OBJECT_INFO");
  });
});
