import { compose } from "redux";
import { connect } from "react-redux";

import { getDijkstra } from "store/graph/actions";

import { AppState } from "store/rootReducer";

import Map from "./Map";

const mapStateToProps = ({ graph }: AppState) => ({
  graph,
});

const mapDispatchToProps = {
  getDijkstra,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Map);
