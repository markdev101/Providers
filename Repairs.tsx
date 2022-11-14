import { useContext } from 'react';
import RepairContext from './RepairContext';
import CarContext from './CarContext';
import * as React from 'react';

const Repairs = () => {
  const car: any = useContext(CarContext);
  const { wait, cost, comment } = useContext(RepairContext);

  const [stWait, setWait] = wait;
  const [stCost, setCost] = React.useState();
  const [stComment, setComment] = React.useState();

  console.log('REPAIRS: ', wait, cost, comment);

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
  const commentStyle = {
    position: 'relative',
    left: '100px',
    width: '300px',
    height: '200px',
  };

  return (
    <div style={divStyle}>
      <p>Car name = {car.vehicle}</p>
      <p> Wait = {stWait} </p>
      <p> Cost = {stCost} </p>
      <textarea style={commentStyle}>{stComment}</textarea>
    </div>
  );
};

export default Repairs;
