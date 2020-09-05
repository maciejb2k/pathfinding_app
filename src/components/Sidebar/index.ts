import { compose } from "redux";
import { connect } from "react-redux";

import { AppState } from "store/rootReducer";

import Sidebar from "./Sidebar";

const mapStateToProps = ({ sidebar }: AppState) => ({
  storeState: sidebar,
});

const mapDispatchToProps = null;

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Sidebar);
