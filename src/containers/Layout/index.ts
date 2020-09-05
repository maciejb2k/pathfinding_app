import { compose } from "redux";
import { connect } from "react-redux";

import Layout from "./Layout";

const mapStateToProps = null;
const mapDispatchToProps = null;

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Layout);
