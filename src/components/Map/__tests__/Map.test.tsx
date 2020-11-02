import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "store";

import Map from "components/Map";

describe("Map.tsx", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <Map />
      </Provider>
    );
  });
});
