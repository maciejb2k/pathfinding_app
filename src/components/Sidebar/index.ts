import { compose } from "redux";
import { connect } from "react-redux";

import { toggleSidebar } from "store/sidebar/actions";

import { AppState } from "store/rootReducer";

import Sidebar from "./Sidebar";

const mapStateToProps = ({ sidebar, api }: AppState) => ({
  sidebar,
  api,
});

const mapDispatchToProps = {
  toggleSidebar,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Sidebar);
