import React from "react";
import {
  FiSearch,
  FiChevronRight,
  FiUser,
  FiSettings,
  FiMenu,
  FiNavigation,
  FiCircle,
} from "react-icons/fi";
import classnames from "classnames";
import { TransformWrapper } from "react-zoom-pan-pinch";
import Modal from "react-modal";
import Flag from "react-world-flags";

import Map from "components/Map";

import styles from "./Layout.module.scss";

function Layout() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles["Layout"]}>
      <div className={styles["Sidebar"]}>
        <header className={styles["Header"]}>
          <h1 className={styles["Header-title"]}>
            Mapa <b>Marketu</b>
          </h1>
          <p className={styles["Header-text"]}>ul. Przykładowa 123, Rzeszów</p>
        </header>
        <div className={styles["Search"]}>
          <input
            type="text"
            className={styles["Search-input"]}
            placeholder="np. Czekolada"
          />
          <button className={styles["Search-submit"]}>
            <FiSearch className={styles["Search-submitIcon"]} />
          </button>
        </div>
        <div className={styles["Buttons"]}>
          <button
            className={classnames({
              [styles["Button"]]: true,
              [styles["Button--active"]]: true,
            })}
          >
            Alfabetycznie
          </button>
          <button
            className={classnames({
              [styles["Button"]]: true,
              [styles["Button--active"]]: false,
            })}
          >
            Kategoriami
          </button>
        </div>
        <div className={styles["Categories"]}>
          <div className={styles["Category"]}>
            <header className={styles["CategoryHeader"]}>
              <h2 className={styles["CategoryHeader-title"]}>
                A
                <span className={styles["CategoryHeader-results"]}>
                  - 14 wyników
                </span>
              </h2>
            </header>
            <div className={styles["CategoryGroup"]}>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["Category"]}>
            <header className={styles["CategoryHeader"]}>
              <h2 className={styles["CategoryHeader-title"]}>
                A
                <span className={styles["CategoryHeader-results"]}>
                  - 14 wyników
                </span>
              </h2>
            </header>
            <div className={styles["CategoryGroup"]}>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["Category"]}>
            <header className={styles["CategoryHeader"]}>
              <h2 className={styles["CategoryHeader-title"]}>
                A
                <span className={styles["CategoryHeader-results"]}>
                  - 14 wyników
                </span>
              </h2>
            </header>
            <div className={styles["CategoryGroup"]}>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
              <div className={styles["CategoryItem"]}>
                <div className={styles["CategoryItem-photo"]}></div>
                <div className={styles["CategoryItem-text"]}>
                  <h3 className={styles["CategoryItem-title"]}>Czekolada</h3>
                  <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
                </div>
                <div className={styles["CategoryItem-link"]}>
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles["Footer"]}>
          <p className={styles["Footer-text"]}>
            Made to learn <b>React & Typescript</b>
          </p>
        </footer>
      </div>
      <div className={styles["Main"]}>
        <TransformWrapper>
          <div className={styles["Controls"]}>
            <div className={styles["ControlsUpperLeft"]}>
              <div className={styles["ControlsMenu"]}>
                <button
                  className={classnames({
                    [styles["ControlsButton"]]: true,
                    [styles["ControlsButton--hamburger"]]: true,
                  })}
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
                  onClick={openModal}
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

      <Modal
        isOpen={modalIsOpen}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Site Settings"
        className={classnames(styles["Modal--settings"])}
        overlayClassName="ModalOverlay"
      >
        <div className={styles["Settings"]}>
          <h2 className={styles["Settings-title"]}>Ustawienia</h2>
          <div className={styles["SettingsItem"]}>
            <div className={styles["SettingsItem-info"]}>
              <h3 className={styles["SettingsItem-title"]}>Ciemny Motyw</h3>
              <p className={styles["SettingsItem-text"]}>
                Przełączanie motywu między jasnym a ciemnym.
              </p>
            </div>
            <div
              className={classnames(
                styles["SettingsItem-input"],
                styles["Switch"]
              )}
            >
              <input
                type="checkbox"
                id="ThemeSwitch"
                className={classnames(styles["Switch-input"], "sr-only")}
              />
              <label
                htmlFor="ThemeSwitch"
                className={styles["Switch-label"]}
                aria-label="Zmien motyw"
              ></label>
            </div>
          </div>
          <div className={styles["SettingsItem"]}>
            <div className={styles["SettingsItem-info"]}>
              <h3 className={styles["SettingsItem-title"]}>Język</h3>
              <p className={styles["SettingsItem-text"]}>
                Zmiana języka witryny.
              </p>
            </div>
            <div className={styles["SettingsItem-input"]}>
              <select className={styles["SelectLang"]}>
                <option value="pl">PL</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Layout;
