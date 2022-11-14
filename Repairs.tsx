import { useContext } from 'react';
import RepairContext from './RepairContext';
import CarContext from './CarContext';
import * as React from 'react';

const Repairs = () => {
  const car: any = useContext(CarContext);
  const repairData: any = useContext(RepairContext);

  const onToggle = (dir: string) => {
    console.log('MODE CHOOSER toggled ' + dir);
    // update global app context
    repairData.mode = dir === 'left' ? 'workflow' : 'preset';
  };
  const direction = repairData.mode === 'workflow' ? 'left' : 'right';
  console.log('ModeChooser direction  = ' + direction);

  const divStyle = {
    position: 'relative',
    left: '100px',
    minWidth: '300px',
    height: '300px',
    backkgroundColor: '#efefef',
    border: 'solid 1px gray',
    overflow: 'auto',
    padding: '6px',
  };

  console.log('REPAIRS: ', repairData);

  return (
    <div style={divStyle}>
      <p>Car name = {car.vehicle}</p>
      {/* <p>    {repairData.wait.text} {repairData.wait.value} </p>
      <p>    {repairData.cost.text} {repairData.cost.value} </p>
      <textarea style={commentStyle}>{repairData.comment}</textarea> */}
    </div>
  );
};

export default Repairs;
