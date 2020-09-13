import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import classnames from "classnames";
import Loader from "react-loader-spinner";

import { IState as SidebarState } from "store/sidebar/reducer";
import { IState as ApiState } from "store/api/reducer";

import styles from "./Sidebar.module.scss";

type AppProps = {
  sidebar: SidebarState;
  api: ApiState;
};

const tabCategories = {
  az: "a-z",
  categories: "categories",
};

function Sidebar(props: AppProps) {
  const {
    sidebar: { isOpen },
    api: { products, categories, objectToCategory, isFetching },
  } = props;

  const [activeTab, setActiveTab] = useState<string>(tabCategories.az);
  const [parsedProducts, setParsedProducts] = useState<any>({});

  useEffect(() => {
    const parseProductsAZ = () => {
      if (products) {
        const data: any = [];

        products.forEach((product: any) => {
          let firstLetter = product.name[0];

          if (!data[firstLetter]) {
            data[firstLetter] = {
              len: 0,
              category: "",
              results: [],
            };
          }

          objectToCategory.forEach((objToCat: any) => {
            if (product.objectId === objToCat.objectId) {
              categories.forEach((category: any) => {
                if (category.id === objToCat.categoryId) {
                  data[firstLetter].category = category.name;
                }
              });
            }
          });

          data[firstLetter].results.push(product);
          data[firstLetter].len = data[firstLetter].len + 1;
        });

        setParsedProducts(data);
      }
    };

    if (!isFetching) {
      if (activeTab === tabCategories.az) {
        parseProductsAZ();
      }
    }
  }, [activeTab, isFetching, categories, products, objectToCategory]);

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
      {/* <div className={styles["Search"]}>
        <input
          type="text"
          className={styles["Search-input"]}
          placeholder="np. Czekolada"
        />
        <button className={styles["Search-submit"]}>
          <FiSearch className={styles["Search-submitIcon"]} />
        </button>
      </div> */}
      <div className={styles["Buttons"]} role="tablist">
        <button
          className={classnames({
            [styles["Button"]]: true,
            [styles["Button--active"]]: activeTab === tabCategories.az,
          })}
          onClick={() => setActiveTab(tabCategories.az)}
        >
          Alfabetycznie
        </button>
        <button
          className={classnames({
            [styles["Button"]]: true,
            [styles["Button--active"]]: activeTab === tabCategories.categories,
          })}
          onClick={() => setActiveTab(tabCategories.categories)}
          disabled
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
        {isFetching ? (
          <div className={styles["Categories-loader"]}>
            <Loader type="TailSpin" color="#1b78d0" height={50} width={50} />
          </div>
        ) : (
          <>
            {Object.keys(parsedProducts).map(
              (letter: string, index: number) => (
                <div key={index} className={styles["Category"]}>
                  <header className={styles["CategoryHeader"]}>
                    <h2 className={styles["CategoryHeader-title"]}>
                      {letter}
                      <span className={styles["CategoryHeader-results"]}>
                        - {parsedProducts[letter].len} wyników
                      </span>
                    </h2>
                  </header>
                  <div className={styles["CategoryGroup"]}>
                    {parsedProducts[letter].results.map((item: any) => (
                      <div key={item.id} className={styles["CategoryItem"]}>
                        <div className={styles["CategoryItem-photo"]}></div>
                        <div className={styles["CategoryItem-text"]}>
                          <h3 className={styles["CategoryItem-title"]}>
                            {item.name}
                          </h3>
                          <p className={styles["CategoryItem-subTitle"]}>
                            {parsedProducts[letter].category}
                          </p>
                        </div>
                        <div className={styles["CategoryItem-link"]}>
                          <FiChevronRight />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </>
        )}
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
