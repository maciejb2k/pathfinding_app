import React from "react";
import {
  FiUser,
  FiSettings,
  FiMenu,
  FiNavigation,
  FiCircle,
} from "react-icons/fi";
import classnames from "classnames";
import { TransformWrapper } from "react-zoom-pan-pinch";

import { MODAL_SETTINGS } from "components/Modals/modalTypes";

import Map from "components/Map";

import styles from "./Main.module.scss";

type AppProps = {
  sidebar: {
    isOpen: boolean;
  };
  modals: {
    isOpen: boolean;
    activeModal: string;
  };
  toggleSidebar: any;
  openModal: any;
  closeModal: any;
};

function Main(props: AppProps) {
  const {
    sidebar: { isOpen: isSidebarOpen },
    toggleSidebar,
    openModal,
  } = props;

  return (
    <div className={styles["Main"]}>
      <TransformWrapper>
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
                  [styles["ControlsButton--zoom"]]: true,
                })}
                aria-label="Zoom In"
              >
                +
              </button>
              <button
                className={classnames({
                  [styles["ControlsButton"]]: true,
                  [styles["ControlsButton--zoom"]]: true,
                })}
                aria-label="Zoom Out"
              >
                -
              </button>
            </div>
            <div className={styles["ControlsButtons"]}>
              <button
                className={classnames({
                  [styles["ControlsButton"]]: true,
                  [styles["ControlsButton--options"]]: true,
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
                onClick={() => openModal(MODAL_SETTINGS)}
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
      </TransformWrapper>
    </div>
  );
}

export default Main;
