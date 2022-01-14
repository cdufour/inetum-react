import React from 'react';
import { useTranslation } from "react-i18next"
import i18n from "./i18n";

const LanguageSwitcher = () => {

  const changeLang = lang => {
    i18n.changeLanguage(lang)
  }

  return(
    <>
      <button onClick={() => changeLang("en")}>EN</button>
      <button onClick={() => changeLang("fr")}>FR</button>
      <button onClick={() => changeLang("it")}>IT</button>
    </>
  )
}

const DemoI18n = () => {

  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      <h2>{ t("hello") }</h2>
    </div>
  );

};

export default DemoI18n;