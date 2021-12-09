import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { DiReact } from "react-icons/di";
import classnames from "classnames";
import Loader from "react-loader-spinner";

import { IState as SidebarState } from "store/sidebar/reducer";
import { IState as ApiState } from "store/api/reducer";
import { ProductsApiType } from "store/api/reducer";

import { searchProduct } from "store/search/actions";

import styles from "./Sidebar.module.scss";

type AppProps = {
  sidebar: SidebarState;
  api: ApiState;
  searchProduct: typeof searchProduct;
};

type ParsedProducts = {
  [key: string]: {
    len: number;
    results: Array<ProductsApiType>;
  };
};

const tabCategories = {
  az: "a-z",
  categories: "categories",
};

function Sidebar(props: AppProps) {
  const {
    sidebar: { isOpen },
    api: { products, categories, objectToCategory, isFetching },
    searchProduct,
  } = props;

  const [activeTab, setActiveTab] = useState<string>(tabCategories.az);
  const [parsedProducts, setParsedProducts] = useState<ParsedProducts>({});

  useEffect(() => {
    const parseProductsAZ = () => {
      if (products) {
        const data: ParsedProducts = {};

        products.forEach((product: ProductsApiType) => {
          let firstLetter = product.name[0];

          if (!data[firstLetter]) {
            data[firstLetter] = {
              len: 0,
              results: [],
            };
          }

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

  const navigateToProduct = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const product = e.currentTarget.dataset.product;
    if (product) {
      searchProduct(product);
    }
  };

  return (
    <div
      className={classnames({
        [styles["Sidebar"]]: true,
        [styles["Sidebar--active"]]: isOpen,
      })}
    >
      <header className={styles["Header"]}>
        <h1 className={styles["Header-title"]}>
          Map of <b>Groceries</b>
        </h1>
        <p className={styles["Header-text"]}>Dijkstra pathfinding example.</p>
      </header>
      <div className={styles["Buttons"]} role="tablist">
        <button
          className={classnames({
            [styles["Button"]]: true,
            [styles["Button--active"]]: activeTab === tabCategories.az,
          })}
          onClick={() => setActiveTab(tabCategories.az)}
        >
          Products List
        </button>
        <button
          className={classnames({
            [styles["Button"]]: true,
            [styles["Button--active"]]: activeTab === tabCategories.categories,
          })}
          onClick={() => setActiveTab(tabCategories.categories)}
        >
          Categories
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
                        - {parsedProducts[letter].len} results
                      </span>
                    </h2>
                  </header>
                  <div className={styles["CategoryGroup"]}>
                    {parsedProducts[letter].results.map(
                      (item: ProductsApiType) => (
                        <div
                          key={item.id}
                          data-product={item.name}
                          className={styles["CategoryItem"]}
                          onClick={navigateToProduct}
                        >
                          <div className={styles["CategoryItem-photo"]}></div>
                          <div className={styles["CategoryItem-text"]}>
                            <h3 className={styles["CategoryItem-title"]}>
                              {item.name}
                            </h3>
                            <p className={styles["CategoryItem-subTitle"]}>
                              {item.desc}
                            </p>
                          </div>
                          <div className={styles["CategoryItem-link"]}>
                            <FiChevronRight />
                          </div>
                        </div>
                      )
                    )}
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
          <ul className={styles["CategoriesList"]}>
            {categories.map((category) => (
              <li key={category.id} className={styles["CategoriesList-item"]}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className={styles["Footer"]}>
        <p className={styles["Footer-text"]}>
          <DiReact className={styles["Footer-icon"]} />
          <span>
            Made by <b><a target="_blank" className={styles["Footer-link"]} href="https://github.com/maciejb2k/pathfinding_app">Maciej Biel</a></b>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
