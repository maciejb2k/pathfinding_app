import React from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import classnames from "classnames";

import styles from "./Sidebar.module.scss";

type AppProps = any;

function Sidebar(props: AppProps) {
  const {
    storeState: { isOpen },
  } = props;

  return (
    <div
      className={classnames({
        [styles["Sidebar"]]: true,
        [styles["Sidebar--active"]]: isOpen,
      })}
    >
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
  );
}

export default Sidebar;
