import React, { useState, useEffect } from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import classnames from "classnames";

import styles from "./Sidebar.module.scss";

type AppProps = {
  storeState: {
    isOpen: boolean;
  };
};

function Sidebar(props: AppProps) {
  const {
    storeState: { isOpen },
  } = props;

  const [activeTab, setActiveTab] = useState<string>("a-z");

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
      <div className={styles["Buttons"]} role="tablist">
        <button
          className={classnames({
            [styles["Button"]]: true,
            [styles["Button--active"]]: activeTab === "a-z",
          })}
          onClick={() => setActiveTab("a-z")}
        >
          Alfabetycznie
        </button>
        <button
          className={classnames({
            [styles["Button"]]: true,
            [styles["Button--active"]]: activeTab === "categories",
          })}
          onClick={() => setActiveTab("categories")}
        >
          Kategoriami
        </button>
      </div>
      <div
        className={classnames({
          [styles["Categories"]]: true,
          [styles["Categories--active"]]: activeTab === "a-z",
        })}
      >
        <div className={styles["Category"]}>
          <header className={styles["CategoryHeader"]}>
            <h2 className={styles["CategoryHeader-title"]}>
              A
              <span className={styles["CategoryHeader-results"]}>
                - 3 wyników
              </span>
            </h2>
          </header>
          <div className={styles["CategoryGroup"]}>
            <div className={styles["CategoryItem"]}>
              <div className={styles["CategoryItem-photo"]}></div>
              <div className={styles["CategoryItem-text"]}>
                <h3 className={styles["CategoryItem-title"]}>Ananas</h3>
                <p className={styles["CategoryItem-subTitle"]}>
                  Owoce i warzywa
                </p>
              </div>
              <div className={styles["CategoryItem-link"]}>
                <FiChevronRight />
              </div>
            </div>
            <div className={styles["CategoryItem"]}>
              <div className={styles["CategoryItem-photo"]}></div>
              <div className={styles["CategoryItem-text"]}>
                <h3 className={styles["CategoryItem-title"]}>Agrest</h3>
                <p className={styles["CategoryItem-subTitle"]}>
                  Owoce i warzywa
                </p>
              </div>
              <div className={styles["CategoryItem-link"]}>
                <FiChevronRight />
              </div>
            </div>
            <div className={styles["CategoryItem"]}>
              <div className={styles["CategoryItem-photo"]}></div>
              <div className={styles["CategoryItem-text"]}>
                <h3 className={styles["CategoryItem-title"]}>Arbuz</h3>
                <p className={styles["CategoryItem-subTitle"]}>
                  Owoce i warzywa
                </p>
              </div>
              <div className={styles["CategoryItem-link"]}>
                <FiChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames({
          [styles["Categories"]]: true,
          [styles["Categories--active"]]: activeTab === "categories",
        })}
      >
        <div className={styles["Category"]}>
          <header className={styles["CategoryHeader"]}>
            <h2 className={styles["CategoryHeader-title"]}>
              S
              <span className={styles["CategoryHeader-results"]}>
                - 3 wyników
              </span>
            </h2>
          </header>
          <div className={styles["CategoryGroup"]}>
            <div className={styles["CategoryItem"]}>
              <div className={styles["CategoryItem-photo"]}></div>
              <div className={styles["CategoryItem-text"]}>
                <h3 className={styles["CategoryItem-title"]}>Rurki z kremem</h3>
                <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
              </div>
              <div className={styles["CategoryItem-link"]}>
                <FiChevronRight />
              </div>
            </div>
            <div className={styles["CategoryItem"]}>
              <div className={styles["CategoryItem-photo"]}></div>
              <div className={styles["CategoryItem-text"]}>
                <h3 className={styles["CategoryItem-title"]}>Ciastka</h3>
                <p className={styles["CategoryItem-subTitle"]}>Słodycze</p>
              </div>
              <div className={styles["CategoryItem-link"]}>
                <FiChevronRight />
              </div>
            </div>
            <div className={styles["CategoryItem"]}>
              <div className={styles["CategoryItem-photo"]}></div>
              <div className={styles["CategoryItem-text"]}>
                <h3 className={styles["CategoryItem-title"]}>Wafelki</h3>
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
