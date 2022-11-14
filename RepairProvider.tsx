import * as React from 'react';
import RepairContext from './RepairContext';

const RepairProvider = ({ children }: Props) => {
  const [vehicles, setVehicles] = React.useState<{}>({});

  return (
    <RepairContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </RepairContext.Provider>
  );
};

export default RepairProvider;
