import * as React from 'react';

const CarContext = React.createContext({
  vehicle: 'vw',
  setVehicle: () => {},
});

export default CarContext;
