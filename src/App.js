import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Welcome = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>En</button>
      <button onClick={() => changeLanguage("ko")}>Ko</button>
      <hr />
      <Trans
        i18nKey="description.part1
      "
      >
        To get started, edit <code>src/App.js</code> and save to reload
      </Trans>
      <div>{t("description.part1")}</div>
    </div>
  );
};

export default Welcome;
