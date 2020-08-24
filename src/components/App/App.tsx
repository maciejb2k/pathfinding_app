import React, { useState } from "react";
import classNames from "classnames";

import styles from "./App.module.scss";

function App() {
  const [theme] = useState("light");

  return <div className={classNames(styles["app"])} data-theme={theme}></div>;
}

export default App;
