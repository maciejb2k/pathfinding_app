import React from "react";

import Sidebar from "components/Sidebar";
import Main from "components/Main";

import ModalSettings from "components/Modals/ModalSettings";

import styles from "./Layout.module.scss";

function Layout(props: any) {
  return (
    <div className={styles["Layout"]}>
      {/* Page layout */}
      <Sidebar />
      <Main />

      {/* List of modals on page */}
      <ModalSettings />
    </div>
  );
}

export default Layout;
