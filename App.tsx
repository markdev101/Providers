import * as React from 'react';
import { useState } from 'react';

import LanguageContext from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import CarContext from './CarContext';
import CarChanger from './CarChanger';
import RepairContext from './RepairContext';
import Repairs from './Repairs';

export default function App() {
  const [language, setLanguage] = useState('en');
  const value = { language, setLanguage };

  // ----------------------------------------------
  // The car context has a simple string value
  const [car, setCar] = useState('vw');
  const cars = { car, setCar };
  // ----------------------------------------------
  // The repairs context has an object that is stored stringified
  const data = {
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
  };
  const stData = JSON.stringify(data);
  // initialize context data
  const [info, setInfo] = useState(stData);
  const repairInfo = { info, setInfo };
  // ----------------------------------------------

  const lang = language === 'en' ? 'de' : 'en';
  const v = car === 'vw' ? 'dodge' : 'vw';

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
  // React.useEffect(() => {
  //   setVehicles(vehicleData.vehicles);
  // }, []);

  return (
    <LanguageContext.Provider value={value}>
      <CarContext.Provider value={cars}>
        <RepairContext.Provider value={repairInfo}>
          <h3>
            Current Language: <strong>{language}</strong>
          </h3>
          <h3>
            Current Vehicle: <strong>{cars.car}</strong>
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
          <h3>Vehicle repair info for {cars.car}</h3>
          <Repairs />
        </RepairContext.Provider>
      </CarContext.Provider>
    </LanguageContext.Provider>
  );
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
