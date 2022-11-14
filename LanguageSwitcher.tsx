import * as React from 'react';
import { useContext } from 'react';

import LanguageContext from './LanguageContext';
import CarContext from './CarContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { vehicle, setVehicle } = useContext(CarContext);

  const clickHandler = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    // When the language changes, this component updates the vechicle context
    // to match the locale
    if (newLang === 'en' && vehicle !== 'dodge') setVehicle('dodge');
    else if (newLang === 'de' && vehicle !== 'vw') setVehicle('vw');
  };
  return (
    <button onClick={() => clickHandler()}>
      Switch Language (Current: {language})
    </button>
  );
};

export default LanguageSwitcher;
