import React from "react";
import Modal from "react-modal";
import classnames from "classnames";

import { MODAL_OBJECT_INFO } from "components/Modals/modalTypes";

import styles from "./ModalObjectInfo.module.scss";

type AppProps = any;

function ModalObjectInfo(props: AppProps) {
  const {
    modals: { isOpen: isModalOpen, activeModal, data },
    closeModal,
  } = props;

  const [isOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (activeModal === MODAL_OBJECT_INFO) {
      setIsModalOpen(true);
    }
  }, [activeModal]);

  React.useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen]);

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={closeModal}
      contentLabel="Site Settings"
      className={classnames(styles["Modal--objectInfo"])}
      overlayClassName="ModalOverlay"
    >
      <p>{data}</p>
    </Modal>
  );
}

export default ModalObjectInfo;
