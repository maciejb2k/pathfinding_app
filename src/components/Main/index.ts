import { compose } from "redux";
import { connect } from "react-redux";

import { toggleSidebar } from "store/sidebar/actions";
import { openModal } from "store/modals/actions";
import { exitPathPreview } from "store/path/actions";
import { searchProduct } from "store/search/actions";
import { toggleEditMode } from "store/graph/actions";

import { AppState } from "store/rootReducer";

import Main from "./Main";

const mapStateToProps = ({ sidebar, path, search, graph }: AppState) => ({
  sidebar,
  path,
  search,
  graph,
});

const mapDispatchToProps = {
  toggleSidebar,
  openModal,
  exitPathPreview,
  searchProduct,
  toggleEditMode,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Main);
