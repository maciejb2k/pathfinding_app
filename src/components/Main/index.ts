import { compose } from "redux";
import { connect } from "react-redux";

import { toggleSidebar } from "store/sidebar/actions";
import { openModal } from "store/modals/actions";

import { AppState } from "store/rootReducer";

import Main from "./Main";

const mapStateToProps = ({ sidebar }: AppState) => ({
  sidebar,
});

const mapDispatchToProps = {
  toggleSidebar,
  openModal,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Main);
