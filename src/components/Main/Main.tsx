import React from "react";
import {
  FiUser,
  FiSettings,
  FiMenu,
  FiNavigation,
  FiCircle,
} from "react-icons/fi";
import classnames from "classnames";

import { MODAL_SETTINGS } from "components/Modals/modalTypes";
import { openModal } from "store/modals/actions";
import { toggleSidebar } from "store/sidebar/actions";

import Map from "components/Map";

import styles from "./Main.module.scss";

type AppProps = {
  sidebar: {
    isOpen: boolean;
  };
  toggleSidebar: typeof toggleSidebar;
  openModal: typeof openModal;
};

function Main(props: AppProps) {
  const {
    sidebar: { isOpen: isSidebarOpen },
    toggleSidebar,
    openModal,
  } = props;

  return (
    <div className={styles["Main"]}>
      <div className={styles["Controls"]}>
        <div className={styles["ControlsUpperLeft"]}>
          <div className={styles["ControlsMenu"]}>
            <button
              className={classnames({
                [styles["ControlsButton"]]: true,
                [styles["ControlsButton--hamburger"]]: true,
                [styles["ControlsButton--hamburgerActive"]]: isSidebarOpen,
              })}
              onClick={toggleSidebar}
            >
              <FiMenu />
            </button>
          </div>
          <div className={styles["ControlsSearch"]}>
            <div className={styles["ControlsSearch-icon"]}>
              <FiCircle />
            </div>
            <input
              type="text"
              className={styles["ControlsSearch-input"]}
              placeholder="Punkt Końcowy"
            />
            <button className={styles["ControlsSearch-submit"]}>
              <FiNavigation />
            </button>
          </div>
        </div>
        <div className={styles["ControlsUpperRight"]}></div>
        <div className={styles["ControlsLowerRight"]}>
          <div className={styles["ControlsButtons"]}>
            <button
              className={classnames({
                [styles["ControlsButton"]]: true,
                [styles["ControlsButton--user"]]: true,
              })}
              aria-label="Get starting point on map"
            >
              <FiUser />
            </button>
            <button
              className={classnames({
                [styles["ControlsButton"]]: true,
                [styles["ControlsButton--options"]]: true,
              })}
              onClick={() => openModal({ modalName: MODAL_SETTINGS })}
              aria-label="Open Settings"
            >
              <FiSettings />
            </button>
          </div>
        </div>
      </div>
      <div className={styles["Map"]}>
        <Map />
      </div>
    </div>
  );
}

export default Main;
