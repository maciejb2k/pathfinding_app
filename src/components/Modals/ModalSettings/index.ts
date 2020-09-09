import { compose } from "redux";
import { connect } from "react-redux";

import { AppState } from "store/rootReducer";

import { switchLang, switchTheme } from "store/settings/actions";
import { closeModal } from "store/modals/actions";

import ModalSettings from "./ModalSettings";

const mapStateToProps = ({ settings, modals }: AppState) => ({
  settings,
  modals,
});

const mapDispatchToProps = {
  closeModal,
  switchLang,
  switchTheme,
};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhancer(ModalSettings);
