import React from "react";
import Modal from "react-modal";
import classnames from "classnames";

import { MODAL_SETTINGS } from "components/Modals/modalTypes";

import { IState as SettingsState } from "store/settings/reducer";
import { IState as ModalsState } from "store/modals/reducer";
import { switchLang, switchTheme } from "store/settings/actions";
import { closeModal } from "store/modals/actions";

import styles from "./ModalSettings.module.scss";

type AppProps = {
  settings: SettingsState;
  modals: ModalsState;
  switchTheme: typeof switchTheme;
  switchLang: typeof switchLang;
  closeModal: typeof closeModal;
};

function ModalSettings(props: AppProps) {
  const themeToBoolean = (theme: string) => (theme === "dark" ? true : false);
  const booleanToTheme = (bool: boolean) => (bool ? "dark" : "light");

  const {
    settings: { lang, theme },
    modals: { isOpen: isModalOpen, activeModal },
    switchTheme,
    switchLang,
    closeModal,
  } = props;

  const [isOpen, setIsModalOpen] = React.useState(false);
  const [isThemeSwitchOn, setTheme] = React.useState(themeToBoolean(theme));
  const [siteLang, setSiteLang] = React.useState(lang);

  const handleThemeSwitch = () => {
    const newValue = !isThemeSwitchOn;

    setTheme(newValue);
    switchTheme(booleanToTheme(newValue));
  };

  const handleLangSwitch = (event: React.FormEvent<HTMLSelectElement>) => {
    const newLang = event.currentTarget.value;

    setSiteLang(newLang);
    switchLang(newLang);
  };

  React.useEffect(() => {
    if (activeModal === MODAL_SETTINGS) {
      setIsModalOpen(true);
    }
  }, [activeModal]);

  React.useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen]);

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={closeModal}
      contentLabel="Site Settings"
      className={classnames(styles["Modal--settings"])}
      overlayClassName="ModalOverlay"
    >
      <div className={styles["Settings"]}>
        <h2 className={styles["Settings-title"]}>Ustawienia</h2>
        <div className={styles["SettingsItem"]}>
          <div className={styles["SettingsItem-info"]}>
            <h3 className={styles["SettingsItem-title"]}>Ciemny Motyw</h3>
            <p className={styles["SettingsItem-text"]}>
              Przełączanie motywu między jasnym a ciemnym.
            </p>
          </div>
          <div
            className={classnames(
              styles["SettingsItem-input"],
              styles["Switch"]
            )}
          >
            <input
              type="checkbox"
              id="ThemeSwitch"
              className={classnames(styles["Switch-input"], "sr-only")}
              checked={isThemeSwitchOn}
              onChange={handleThemeSwitch}
            />
            <label
              htmlFor="ThemeSwitch"
              className={styles["Switch-label"]}
              aria-label="Zmien motyw"
            ></label>
          </div>
        </div>
        <div className={styles["SettingsItem"]}>
          <div className={styles["SettingsItem-info"]}>
            <h3 className={styles["SettingsItem-title"]}>Język</h3>
            <p className={styles["SettingsItem-text"]}>
              Zmiana języka witryny.
            </p>
          </div>
          <div className={styles["SettingsItem-input"]}>
            <select
              className={styles["SelectLang"]}
              onChange={handleLangSwitch}
              value={siteLang}
            >
              <option value="pl">PL</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSettings;
