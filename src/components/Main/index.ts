import { compose } from "redux";
import { connect } from "react-redux";

import { toggleSidebar } from "store/sidebar/actions";
import { openModal, closeModal } from "store/modals/actions";

import { AppState } from "store/rootReducer";

import Main from "./Main";

const mapStateToProps = ({ sidebar, modals }: AppState) => ({
  sidebar,
  modals,
});

const mapDispatchToProps = {
  toggleSidebar,
  openModal,
  closeModal,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Main);
