import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import classnames from "classnames";
import Loader from "react-loader-spinner";

import { apiArrayToObject, capitalize } from "utils/helpers";
import { MODAL_OBJECT_INFO } from "components/Modals/modalTypes";
import { IState as ModalsState } from "store/modals/reducer";
import {
  ProductsApiType,
  CategoriesApiType
} from "store/api/reducer";
import { closeModal } from "store/modals/actions";

import styles from "./ModalObjectInfo.module.scss";
import { fetchCategoryIdFromCategories, fetchObjectIdFromObjectCategories, fetchProductsByObjectId } from "store/api/api";

type AppProps = {
  modals: ModalsState;
  closeModal: typeof closeModal;
};

function ModalObjectInfo(props: AppProps) {
  const {
    modals: { isOpen: isModalOpen, activeModal, data },
    closeModal,
  } = props;

  const [isOpen, setIsModalOpen] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  const [category, setCategoriesData] = useState<CategoriesApiType>(Object());
  const [products, setProductsData] = useState<Array<ProductsApiType>>([]);

  useEffect(() => {
    if (activeModal === MODAL_OBJECT_INFO) {
      setIsModalOpen(true);
    }
  }, [activeModal]);

  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      const objectToCategoryFetch = await fetchObjectIdFromObjectCategories(data)
      const objectToCategoryData = apiArrayToObject(objectToCategoryFetch);

      const categoriesFetch = await fetchCategoryIdFromCategories(objectToCategoryData.categoryId);
      const categoriesData = apiArrayToObject(categoriesFetch);
      setCategoriesData(categoriesData);

      const productsData = await fetchProductsByObjectId(objectToCategoryData.objectId);
      setProductsData(productsData);

      setIsFetching(false);
    };

    if (data) {
      fetchData();
    }
  }, [data]);

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={closeModal}
      contentLabel="Site Settings"
      className={classnames(styles["Modal--objectInfo"])}
      overlayClassName="ModalOverlay"
    >
      {isFetching ? (
        <div className={styles["ModalLoader"]}>
          <Loader type="TailSpin" color="#1b78d0" height={50} width={50} />
        </div>
      ) : category && products ? (
        <>
          <header className={styles["ObjectHeader"]}>
            <h3 className={styles["ObjectHeader-title"]}>{category.name}</h3>
          </header>
          <div className={styles["ObjectBody"]}>
            {!products.length ? (
              <p className={styles["Object-emptyList"]}>Brak produktów</p>
            ) : (
              <ul className={styles["ObjectList"]}>
                {products.map((product: ProductsApiType) => (
                  <li className={styles["ObjectList-item"]} key={product.id}>
                    <div className={styles["ObjectList-itemInfo"]}>
                      <h4 className={styles["ObjectList-itemTitle"]}>
                        {capitalize(product.name)}
                      </h4>
                      <p className={styles["ObjectList-itemDesc"]}>
                        {capitalize(product.desc)}
                      </p>
                    </div>
                    <p className={styles["ObjectList-itemPrice"]}>
                      {product.price} zł
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : null}
    </Modal>
  );
}

export default ModalObjectInfo;
