import * as React from 'react';
import { useContext } from 'react';

import CarContext from './CarContext';

const CarChanger = () => {
  const { car, setCar } = useContext(CarContext);

  const clickHandler = () => {
    const newcar = car === 'vw' ? 'dodge' : 'vw';
    setCar(newcar);
  };
  return (
    <button onClick={() => clickHandler()}>Change Cars (Current: {car})</button>
  );
};

export default CarChanger;
