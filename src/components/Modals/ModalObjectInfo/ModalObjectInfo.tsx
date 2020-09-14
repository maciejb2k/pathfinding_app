import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import classnames from "classnames";
import axios from "axios";
import Loader from "react-loader-spinner";

import { apiArrayToObject, capitalize } from "utils/helpers";
import { MODAL_OBJECT_INFO } from "components/Modals/modalTypes";
import { IState as ModalsState } from "store/modals/reducer";
import { closeModal } from "store/modals/actions";

import styles from "./ModalObjectInfo.module.scss";

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

  const [categories, setCategoriesData] = useState<any>({});
  const [products, setProductsData] = useState<any>([]);

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

  // TODO Types
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      const { data: objectToCategoryFetch } = await axios.get(
        `http://localhost:3001/object-to-category?objectId=${data}`
      );
      const objectToCategoryData = apiArrayToObject(objectToCategoryFetch);

      const { data: categoriesFetch } = await axios.get(
        `http://localhost:3001/categories?id=${objectToCategoryData.categoryId}`
      );
      const categoriesData = apiArrayToObject(categoriesFetch);
      setCategoriesData(categoriesData);

      const { data: productsData } = await axios.get(
        `http://localhost:3001/products?objectId=${objectToCategoryData.objectId}`
      );
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
      ) : categories && products ? (
        <>
          <header className={styles["ObjectHeader"]}>
            <h3 className={styles["ObjectHeader-title"]}>{categories.name}</h3>
          </header>
          {/* TODO - Types */}
          <div className={styles["ObjectBody"]}>
            {!products.length ? (
              <p className={styles["Object-emptyList"]}>Brak produktów</p>
            ) : (
              <ul className={styles["ObjectList"]}>
                {products.map(
                  (product: {
                    id: string;
                    name: string;
                    desc: string;
                    price: string;
                  }) => (
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
                  )
                )}
              </ul>
            )}
          </div>
        </>
      ) : null}
    </Modal>
  );
}

export default ModalObjectInfo;
