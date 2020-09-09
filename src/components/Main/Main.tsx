import React, { useEffect, useState, useRef } from "react";
import {
  FiUser,
  FiSettings,
  FiMenu,
  FiNavigation,
  FiCircle,
  FiX,
} from "react-icons/fi";
import classnames from "classnames";

import { capitalize } from "utils/helpers";

import { MODAL_SETTINGS } from "components/Modals/modalTypes";

import { IState as SidebarState } from "store/sidebar/reducer";
import { IState as PathState } from "store/path/reducer";
import { IState as SearchState } from "store/search/reducer";

import { openModal } from "store/modals/actions";
import { toggleSidebar } from "store/sidebar/actions";
import { exitPathPreview } from "store/path/actions";
import { searchProduct } from "store/search/actions";

import Map from "components/Map";

import styles from "./Main.module.scss";

type AppProps = {
  sidebar: SidebarState;
  path: PathState;
  search: SearchState;
  toggleSidebar: typeof toggleSidebar;
  openModal: typeof openModal;
  exitPathPreview: typeof exitPathPreview;
  searchProduct: typeof searchProduct;
};

function Main(props: AppProps) {
  const {
    sidebar: { isOpen: isSidebarOpen },
    path: { isPathPreview },
    search: { searchResult },
    toggleSidebar,
    openModal,
    exitPathPreview,
    searchProduct,
  } = props;

  const [productPreviewName, setProductPreview] = useState("");
  const [product, setProduct] = useState("");

  const pathPreviewButton = useRef<HTMLButtonElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  const focusSearchInput = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchProduct(product.toLowerCase().trim());

    if (pathPreviewButton && pathPreviewButton.current) {
      pathPreviewButton.current.focus();
    }

    if (searchInput && searchInput.current) {
      searchInput.current.value = "";
      setProduct("");
    }
  };

  useEffect(() => {
    if (searchResult && searchResult.name) {
      setProductPreview(capitalize(searchResult.name.toLowerCase()));
    } else {
      setProductPreview("");
    }
  }, [searchResult]);

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
            <form
              onSubmit={handleSubmit}
              className={styles["ControlsSearch-form"]}
            >
              <div className={styles["ControlsSearch-icon"]}>
                <FiCircle />
              </div>
              <input
                name="search"
                type="text"
                className={styles["ControlsSearch-input"]}
                placeholder="Szukany produkt"
                onChange={(e) => setProduct(e.target.value)}
                id="SearchInput"
                ref={searchInput}
              />
              <button
                className={classnames({
                  [styles["ControlsSearch-submit"]]: true,
                  [styles["ControlsSearch-submit--disabled"]]: isPathPreview,
                })}
                disabled={!product || isPathPreview}
              >
                <FiNavigation />
              </button>
            </form>
            <div
              className={classnames({
                [styles["PathPreview"]]: true,
                [styles["PathPreview--active"]]: isPathPreview,
              })}
            >
              <div className={styles["PathPreview-info"]}>
                <p className={styles["PathPreview-title"]}>
                  {productPreviewName}
                </p>
              </div>
              <button
                type="submit"
                className={classnames({
                  [styles["PathPreview-button"]]: true,
                })}
                title="Close path preview."
                ref={pathPreviewButton}
                onClick={() => {
                  focusSearchInput();
                  exitPathPreview();
                }}
              >
                <FiX />
              </button>
            </div>
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
              id="Settings"
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
