import { compose } from "redux";
import { connect } from "react-redux";

import { getPath } from "store/path/actions";

import { AppState } from "store/rootReducer";

import Map from "./Map";

const mapStateToProps = ({ graph, path }: AppState) => ({
  graph,
  path,
});

const mapDispatchToProps = {
  getPath,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Map);
