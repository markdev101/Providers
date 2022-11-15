import * as React from 'react';

const CarContext = React.createContext({
  car: 'vw',
  setCar: () => {},
});

export default CarContext;
