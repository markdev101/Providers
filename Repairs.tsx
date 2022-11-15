import { useContext } from 'react';
import RepairContext from './RepairContext';
import CarContext from './CarContext';
import * as React from 'react';

const Repairs = () => {
  const carCtx: any = useContext(CarContext);
  const repairCtx = useContext(RepairContext);
  let info: any;
  let textareaId = 'carDetails-' + new Date().getMilliseconds();

  console.log('REPAIRS CONTEXT:', repairCtx);
  const handleSaveComment = () => {
    console.log('Save Comment Clicked');
    let textElem: any = document.getElementById(textareaId);
    if (textElem) {
      let txt = textElem.value;

      if (info && info.vehicles[carCtx.car]) {
        let data = { vehicles: { ...info.vehicles } };
        data.vehicles[carCtx.car].comment = txt;
        let s = JSON.stringify(data);

        repairCtx.setInfo(s);
      }
    }
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

  console.log('Car = ' + carCtx.car);
  if (repairCtx) {
    console.log(' STATS: ', repairCtx);

    if (repairCtx.info) {
      info = JSON.parse(repairCtx.info);
      if (info && info.vehicles) {
        const details = info.vehicles[carCtx.car];
        if (details) {
          console.log('car=' + carCtx.car + '  comment=' + details.comment);
          return (
            <div style={divStyle}>
              <div>Car name = {carCtx.car}</div>
              <div>
                <strong> Wait = </strong> {details.wait}
              </div>
              <div>
                <strong> Cost = </strong>
                {details.cost}
              </div>
              <div>
                <strong> Comment: </strong>
              </div>
              <textarea id={textareaId} style={commentStyle}>
                {details.comment}
              </textarea>
              <button style={buttonStyle} onClick={() => handleSaveComment()}>
                Save Comment
              </button>
            </div>
          );
        }
      } else {
        return <div>invalid vehicle data in RepairConext</div>;
      }
    } else {
      return <div>details missing stuff</div>;
    }
  } else {
    return <div>No data found for {carCtx.car}</div>;
  }
};

export default Repairs;
