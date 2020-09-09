import { compose } from "redux";
import { connect } from "react-redux";

import { openModal, closeModal } from "store/modals/actions";
import { setStartVertex } from "store/graph/actions";

import { AppState } from "store/rootReducer";

import FloorMapSvg from "./FloorMapSvg";

const mapStateToProps = ({ modals, graph }: AppState) => ({
  modals,
  graph,
});

const mapDispatchToProps = {
  openModal,
  closeModal,
  setStartVertex,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(FloorMapSvg);
