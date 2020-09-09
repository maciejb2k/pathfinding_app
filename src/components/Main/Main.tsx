import React from "react";
import {
  FiUser,
  FiSettings,
  FiMenu,
  FiNavigation,
  FiCircle,
  FiX,
} from "react-icons/fi";
import classnames from "classnames";
import { Form, Field } from "react-final-form";

import { MODAL_SETTINGS } from "components/Modals/modalTypes";

import { IState as SidebarState } from "store/sidebar/reducer";
import { IState as PathState } from "store/path/reducer";

import { openModal } from "store/modals/actions";
import { toggleSidebar } from "store/sidebar/actions";
import { exitPathPreview } from "store/path/actions";
import { searchProduct } from "store/search/actions";

import Map from "components/Map";

import styles from "./Main.module.scss";

type AppProps = {
  sidebar: SidebarState;
  path: PathState;
  toggleSidebar: typeof toggleSidebar;
  openModal: typeof openModal;
  exitPathPreview: typeof exitPathPreview;
  searchProduct: typeof searchProduct;
};

type SearchFormValues = {
  search: string;
};

function Main(props: AppProps) {
  const {
    sidebar: { isOpen: isSidebarOpen },
    path: { isPathPreview },
    toggleSidebar,
    openModal,
    exitPathPreview,
    searchProduct,
  } = props;

  const onSearchSubmit = (values: SearchFormValues) => {
    if (values.search) {
      const { search } = values;
      searchProduct(search);
    }
  };

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
            <Form
              onSubmit={onSearchSubmit}
              initialValues={{ search: "" }}
              render={({ handleSubmit, submitting, pristine }) => (
                <form
                  onSubmit={handleSubmit}
                  className={styles["ControlsSearch-form"]}
                >
                  <div className={styles["ControlsSearch-icon"]}>
                    <FiCircle />
                  </div>
                  <Field<string>
                    name="search"
                    component="input"
                    type="text"
                    className={styles["ControlsSearch-input"]}
                    placeholder="Szukany produkt"
                  />
                  <button
                    className={styles["ControlsSearch-submit"]}
                    disabled={submitting || pristine}
                  >
                    <FiNavigation />
                  </button>
                </form>
              )}
            />
            {isPathPreview ? (
              <button
                type="submit"
                className={classnames({
                  [styles["ControlsButton"]]: true,
                  [styles["ControlsButton--closePreview"]]: true,
                })}
                title="Close path preview."
                onClick={exitPathPreview}
              >
                <FiX />
              </button>
            ) : null}
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
