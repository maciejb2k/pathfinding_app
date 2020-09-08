import React, { useEffect } from "react";

import { initLocalStorageSettings } from "utils/initLocalStorage";
import { initGraph } from "store/graph/actions";

import Layout from "containers/Layout";

type AppProps = {
  storeState: {
    theme: string;
    lang: string;
  };
  initGraph: typeof initGraph;
};

function App(props: AppProps) {
  const {
    storeState: { theme },
    initGraph,
  } = props;

  useEffect(() => {
    initLocalStorageSettings();
    initGraph();
  }, [initGraph]);

  return (
    <div id="app" data-theme={theme}>
      <Layout />
    </div>
  );
}

export default App;
