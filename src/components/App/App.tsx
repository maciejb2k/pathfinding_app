import React, { useEffect } from "react";

import Layout from "containers/Layout";
import { initLocalStorageSettings } from "utils/initLocalStorage";

type AppProps = {
  storeState: {
    theme: string;
    lang: string;
  };
};

function App(props: AppProps) {
  const {
    storeState: { theme },
  } = props;

  useEffect(() => {
    initLocalStorageSettings();
  }, []);

  return (
    <div id="app" data-theme={theme}>
      <Layout />
    </div>
  );
}

export default App;
