import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import RepairContext from './RepairContext';
import CarContext from './CarContext';
import Comments from './Comments';

const Repairs = () => {
  const carCtx: any = useContext(CarContext);
  const { info, setInfo } = useContext(RepairContext);
  const [stateComment, setStateComment] = useState('');

  let localInfo: any;
  let textareaId = 'carDetails-' + new Date().getMilliseconds();

  // useEffect(() => {
  //   console.log('REPAIRS useEffect...', localInfo, stateComment);

  //   if (localInfo && localInfo.vehicles[carCtx.car]) {
  //     let data = { vehicles: { ...localInfo.vehicles } };
  //     data.vehicles[carCtx.car].comment = stateComment;
  //     let s: string = JSON.stringify(data);
  //     setInfo(s);
  //   }
  // }, [stateComment]);

  console.log('REPAIRS CONTEXT:', info);

  const handleSaveComment = (comment) => {
    console.log('Save Comment Clicked with comment=', comment);
    setStateComment(comment);
    if (localInfo && localInfo.vehicles[carCtx.car]) {
      let data = { vehicles: { ...localInfo.vehicles } };
      data.vehicles[carCtx.car].comment = comment;
      let s: string = JSON.stringify(data);
      setInfo(s);
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

  console.log('Car = ' + carCtx.car);
  if (info) {
    console.log(' STATS: ', info);

    localInfo = JSON.parse(info);
    if (localInfo && localInfo.vehicles) {
      const details = localInfo.vehicles[carCtx.car];
      if (details) {
        let commentText = details.comment;
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
            <Comments onChange={handleSaveComment} text={commentText} />
          </div>
        );
      }
    } else {
      return <div>invalid vehicle data in RepairConext</div>;
    }
  } else {
    return <div>No details found for {carCtx.car}</div>;
  }
};

export default Repairs;
