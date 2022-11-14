import * as React from 'react';
import RepairContext from './RepairContext';

const RepairProvider = (props) => {
  const [wait, setWait] = React.useState();
  const [cost, setCost] = React.useState();
  const [comment, setComment] = React.useState();

  return (
    <RepairContext.Provider
      value={{
        wait: [wait, setWait],
        cost: [cost, setCost],
        comment: [comment, setComment],
      }}
    >
      {props.children}
    </RepairContext.Provider>
  );
};

export default RepairProvider;
