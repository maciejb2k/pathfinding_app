import { compose } from "redux";
import { connect } from "react-redux";

import { initGraph } from "store/graph/actions";

import { AppState } from "store/rootReducer";

import App from "./App";

const mapStateToProps = ({ settings, graph }: AppState) => ({
  storeState: settings,
});

const mapDispatchToProps = {
  initGraph,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(App);
