import React, { useState } from "react";
import classNames from "classnames";

import styles from "./App.module.scss";

import Layout from "containers/Layout";

function App() {
  const [theme] = useState<string>("light");

  return (
    <div id="app" data-theme={theme}>
      <Layout />
    </div>
  );
}

export default App;
