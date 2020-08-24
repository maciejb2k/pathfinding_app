import React from "react";
import i18n from "utils/i18n";

import { useTranslation } from "react-i18next";

import Map from "components/Map";

function Layout() {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("hello")}</p>
      <Map></Map>
    </>
  );
}

export default Layout;
