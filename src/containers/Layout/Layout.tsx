import React from "react";

import Sidebar from "components/Sidebar";
import Main from "components/Main";

import ModalSettings from "components/Modals/ModalSettings";
import ModalObjectInfo from "components/Modals/ModalObjectInfo";

import styles from "./Layout.module.scss";

function Layout() {
  return (
    <div className={styles["Layout"]}>
      <div className={styles["SkipLinks"]}>
        <a className={styles["SkipLink"]} href="#SearchInput">
          Szukaj produktu
        </a>
        <a className={styles["SkipLink"]} href="#Settings">
          Ustawienia
        </a>
      </div>
      {/* Page layout */}
      <Sidebar />
      <Main />

      {/* List of modals on page */}
      <ModalSettings />
      <ModalObjectInfo />
    </div>
  );
}

export default Layout;
