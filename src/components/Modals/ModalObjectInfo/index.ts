import { compose } from "redux";
import { connect } from "react-redux";

import { AppState } from "store/rootReducer";

import { closeModal } from "store/modals/actions";

import ModalObjectInfo from "./ModalObjectInfo";

const mapStateToProps = ({ modals }: AppState) => ({
  modals,
});

const mapDispatchToProps = {
  closeModal,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(ModalObjectInfo);
