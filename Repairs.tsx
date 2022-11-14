import { useContext } from 'react';
import RepairContext from './RepairContext';
import CarContext from './CarContext';
import * as React from 'react';

const Repairs = () => {
  const car: any = useContext(CarContext);
  const { vehicles, setVehicles } = useContext(RepairContext);

  console.log('REPAIRS: ', vehicles, setVehicles);

  const handleSaveComment = () => {
    console.log('Save Comment Clicked');
  };

  const divStyle = {
    position: 'relative',
    left: '20px',
    minWidth: '300px',
    height: '300px',
    backkgroundColor: '#efefef',
    border: 'solid 1px gray',
    overflow: 'auto',
    padding: '6px',
  };
  const commentStyle = {
    position: 'relative',
    left: '20px',
    width: '300px',
    height: '100px',
    backgroundColor: '#fafafa',
  };
  const buttonStyle = {
    position: 'relative',
    top: '40px',
    left: '-80px',
  };

  console.log('Car = ' + car.vehicle);
  const details: any = vehicles[car.vehicle];
  if (details) {
    console.log(' STATS: ', details);

    return (
      <div style={divStyle}>
        <p>Car name = {car.vehicle}</p>
        <p> Wait = {details.wait} </p>
        <p> Cost = {details.cost} </p>
        <p> Comment: </p>
        <textarea style={commentStyle}>{details.comment}</textarea>
        <button style={buttonStyle} onClick={() => handleSaveComment()}>
          Save Comment
        </button>
      </div>
    );
  } else {
    console.log('REPAIRS: ', vehicles, setVehicles, RepairContext.Provider);
    return <div>No data found for {car.vehicle}</div>;
  }
};

export default Repairs;
