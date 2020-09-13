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
import Loader from "react-loader-spinner";
import axios from "axios";

import { capitalize } from "utils/helpers";

import { MODAL_SETTINGS } from "components/Modals/modalTypes";

import { IState as SidebarState } from "store/sidebar/reducer";
import { IState as PathState } from "store/path/reducer";
import { IState as SearchState } from "store/search/reducer";
import { IState as GraphState } from "store/graph/reducer";

import { openModal } from "store/modals/actions";
import { toggleSidebar } from "store/sidebar/actions";
import { exitPathPreview } from "store/path/actions";
import { searchProduct } from "store/search/actions";
import { toggleEditMode } from "store/graph/actions";

import Map from "components/Map";

import styles from "./Main.module.scss";

type AppProps = {
  sidebar: SidebarState;
  path: PathState;
  search: SearchState;
  graph: GraphState;
  toggleSidebar: typeof toggleSidebar;
  openModal: typeof openModal;
  exitPathPreview: typeof exitPathPreview;
  searchProduct: typeof searchProduct;
  toggleEditMode: typeof toggleEditMode;
};

function Main(props: AppProps) {
  const {
    sidebar: { isOpen: isSidebarOpen },
    path: { isPathPreview },
    search: { searchResult },
    graph: { isEditMode },
    toggleSidebar,
    openModal,
    exitPathPreview,
    searchProduct,
    toggleEditMode,
  } = props;

  const [productPreviewName, setProductPreview] = useState("");
  const [product, setProduct] = useState("");

  const [isAutocomplete, setIsAutocomplete] = useState(false);
  const [isAutocompleteFetching, setIsAutocompleteFetching] = useState(false);
  const [searchAutocomplete, setSearchAutocomplete] = useState([]);

  const pathPreviewButton = useRef<HTMLButtonElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  // TODO - Add a11y keyboard support for autocomplete

  const focusSearchInput = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  };

  const fetchAutocomplete = async (product: string) => {
    setIsAutocompleteFetching(true);

    const { data: productsData } = await axios.get(
      `http://localhost:3001/products?name_like=${product}`
    );

    setIsAutocompleteFetching(false);

    return productsData;
  };

  const onSearchFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (product) {
      setIsAutocomplete(true);
    }
  };

  const onSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setProduct(value);

    if (value) {
      setIsAutocomplete(true);
      const result = await fetchAutocomplete(value);
      setSearchAutocomplete(result);
    } else {
      setIsAutocomplete(false);
    }
  };

  const onSearchBlur = (e: React.FocusEvent) => {
    e.preventDefault();
    setIsAutocomplete(false);
  };

  const autocompleteInput = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.textContent;
    if (searchInput.current && value) {
      searchInput.current.value = value;
      setProduct(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditMode) {
      return false;
    }

    searchProduct(product.toLowerCase().trim());
    setIsAutocomplete(false);

    if (pathPreviewButton && pathPreviewButton.current) {
      pathPreviewButton.current.focus();
    }

    if (searchInput && searchInput.current) {
      searchInput.current.value = "";
      setProduct("");
    }

    return true;
  };

  const toggleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isPathPreview) {
      toggleEditMode();
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
              <div className={styles["ControlsSearch-inputGroup"]}>
                <input
                  name="search"
                  type="text"
                  className={styles["ControlsSearch-input"]}
                  placeholder="Szukany produkt"
                  id="SearchInput"
                  onFocus={onSearchFocus}
                  onBlur={onSearchBlur}
                  onChange={onSearchChange}
                  ref={searchInput}
                />
                {isAutocomplete ? (
                  <div className={styles["Autocomplete"]}>
                    {isAutocompleteFetching ? (
                      <div className={styles["Autocomplete-loader"]}>
                        <Loader
                          type="TailSpin"
                          color="#1b78d0"
                          height={20}
                          width={20}
                        />
                      </div>
                    ) : searchAutocomplete.length ? (
                      <ul className={styles["Autocomplete-list"]}>
                        {searchAutocomplete.map((item: any) => (
                          <li
                            key={item.id}
                            onMouseDown={autocompleteInput}
                            className={styles["Autocomplete-listItem"]}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className={styles["Autocomplete-empty"]}>
                        Brak rezultatów
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
              <button
                className={classnames({
                  [styles["ControlsSearch-submit"]]: true,
                  [styles["ControlsSearch-submit--disabled"]]:
                    isPathPreview || isEditMode,
                })}
                disabled={isPathPreview}
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
                [styles["ControlsButton--tooltip"]]: true,
                [styles["ControlsButton--editMode"]]: isEditMode,
              })}
              aria-label="Change starting point on map"
              data-text="Change starting point"
              onClick={toggleEdit}
            >
              <FiUser />
            </button>
            <button
              className={classnames({
                [styles["ControlsButton"]]: true,
                [styles["ControlsButton--options"]]: true,
                [styles["ControlsButton--tooltip"]]: true,
              })}
              onClick={() => openModal({ modalName: MODAL_SETTINGS })}
              aria-label="Open Settings"
              data-text="Open Settings"
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
