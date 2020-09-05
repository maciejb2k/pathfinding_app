import { compose } from "redux";
import { connect } from "react-redux";

import { AppState } from "store/rootReducer";

import App from "./App";

const mapStateToProps = ({ settings }: AppState) => ({
  storeState: settings,
});

const mapDispatchToProps = {};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(App);
