import { compose } from "redux";
import { connect } from "react-redux";

import Map from "./Map";

const mapStateToProps = null;
const mapDispatchToProps = null;

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(Map);
