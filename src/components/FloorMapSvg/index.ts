import { compose } from "redux";
import { connect } from "react-redux";

import { openModal, closeModal } from "store/modals/actions";

import { AppState } from "store/rootReducer";

import FloorMapSvg from "./FloorMapSvg";

const mapStateToProps = ({ modals }: AppState) => ({
  modals,
});

const mapDispatchToProps = {
  openModal,
  closeModal,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(FloorMapSvg);
