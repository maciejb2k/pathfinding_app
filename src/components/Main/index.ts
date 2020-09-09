import { compose } from "redux";
import { connect } from "react-redux";

import { toggleSidebar } from "store/sidebar/actions";
import { openModal } from "store/modals/actions";
import { exitPathPreview } from "store/path/actions";
import { searchProduct } from "store/search/actions";

import { AppState } from "store/rootReducer";

import Main from "./Main";

const mapStateToProps = ({ sidebar, path, search }: AppState) => ({
  sidebar,
  path,
  search,
});

const mapDispatchToProps = {
  toggleSidebar,
  openModal,
  exitPathPreview,
  searchProduct,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Main);
