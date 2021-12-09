import { compose } from "redux";
import { connect } from "react-redux";

import { initGraph } from "store/graph/actions";
import { fetchApiData } from "store/api/actions";

import { AppState } from "store/rootReducer";

import App from "./App";

const mapStateToProps = ({ settings }: AppState) => ({
  storeState: settings,
});

const mapDispatchToProps = {
  initGraph,
  fetchApiData,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(App);
