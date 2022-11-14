import * as React from 'react';
import { useState } from 'react';
// import { ReactDOM } from 'react-dom';

import LanguageContext from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import CarContext from './CarContext';
import CarChanger from './CarChanger';
// import RepairContext from './RepairContext';
import RepairProvider from './RepairProvider';
import Repairs from './Repairs';
import { RepairData } from './RepairContext';

export default function App() {
  const [language, setLanguage] = useState('en');
  const value = { language, setLanguage };
  const [vehicle, setVehicle] = useState('vw');
  const cars = { vehicle, setVehicle };
  const [info, setInfo] = useState({});
  const repairInfo = { info, setInfo };

  const lang = language === 'en' ? 'de' : 'en';
  const v = vehicle === 'vw' ? 'dodge' : 'vw';

  const divStyle = {
    fontSize: '14pt',
    color: 'blue',
    marginBottom: '16px',
  };
  const divStyle2 = {
    fontSize: '9pt',
    color: '#333',
    marginTop: '-12px',
    marginBottom: '16px',
  };

  const vehicleData: RepairData = {
    vehicles: {
      vw: {
        wait: 'long',
        cost: 'moderate',
        comment: '',
      },
      dodge: {
        wait: 'short',
        cost: 'high',
        comment: '',
      },
    },
    setVehicles: ({}) => void {},
  } as RepairData;

  return (
    <LanguageContext.Provider value={value}>
      <CarContext.Provider value={cars}>
        <RepairProvider value={vehicleData}>
          <h3>
            Current Language: <strong>{language}</strong>
          </h3>
          <h3>
            Current Vehicle: <strong>{vehicle}</strong>
          </h3>
          <div style={divStyle}>Click button to change to [{lang}]</div>
          <div style={divStyle2}>
            (Changing language may change the vehicle to that country's car)
          </div>
          <div>
            <LanguageSwitcher />
          </div>
          <br></br>
          <br></br>
          <div style={divStyle}>Click button to change vehicle to [{v}]</div>
          <div style={divStyle2}>
            (Changing vechicle will change repair info below)
          </div>
          <div>
            <CarChanger />
          </div>
          <br></br>
          <br></br>
          <h3>Vehicle repair info for {vehicle}</h3>
          <Repairs />
        </RepairProvider>
      </CarContext.Provider>
    </LanguageContext.Provider>
  );
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
