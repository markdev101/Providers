import * as React from 'react';

const RepairContext = React.createContext({
  info: null,
  setInfo: () => {},
});

export default RepairContext;
