import * as React from 'react';

export interface RepairData {
  vehicles: {};
  setVehicles: (data: {}) => void;
}

const defaultData: RepairData = {
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

// const RepairContext = React.createContext<RepairData>(defaultData);
const RepairContext =
  React.createContext<{
    vehicles: {};
    setVehicles: React.Dispatch<React.SetStateAction<{}>>;
  }>(defaultData);

export default RepairContext;
