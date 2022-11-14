import * as React from 'react';
import { useContext } from 'react';

import CarContext from './CarContext';

const CarChanger = () => {
  const { vehicle, setVehicle } = useContext(CarContext);

  const clickHandler = () => {
    const newcar = vehicle === 'vw' ? 'dodge' : 'vw';
    setVehicle(newcar);
  };
  return (
    <button onClick={() => clickHandler()}>
      Change Cars (Current: {vehicle})
    </button>
  );
};

export default CarChanger;
