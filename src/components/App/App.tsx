import React, { useEffect } from "react";

import { initLocalStorageSettings } from "utils/initLocalStorage";
import { initGraph } from "store/graph/actions";
import { fetchApiData } from "store/api/actions";

import Layout from "containers/Layout";

type AppProps = {
  storeState: {
    theme: string;
    lang: string;
  };
  initGraph: typeof initGraph;
  fetchApiData: typeof fetchApiData;
};

function App(props: AppProps) {
  const {
    storeState: { theme },
    initGraph,
    fetchApiData,
  } = props;

  useEffect(() => {
    document.title = "Wayfinding";
  }, []);

  useEffect(() => {
    initLocalStorageSettings();
    initGraph();
    fetchApiData();
  }, [fetchApiData, initGraph]);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div id="app">
      <Layout />
    </div>
  );
}

export default App;
