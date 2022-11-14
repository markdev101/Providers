import * as React from 'react';
import { useState, useEffect, useMemo, useContext } from 'react';

type TrainsListResponseType = [];

type TrainsDetailsResponseType = {
  trainId: string;
  trainNo: string;
  lineId: string;
  route: string;
  lineKmPosition: string;
  speed: number;
  deviationFromTimetable: number;
  mileage: number;
  lastInspectionDate: string;
  nextInspectionDate: string;
  state: string;
};

interface TrainsContextValues {
  trainsList: TrainsListResponseType[];
  trainsDetails?: TrainsDetailsResponseType;
  handlePushToTrainsDetails: (arg: string) => void;
  trainId: string;
}
export const TrainsContext = React.createContext<TrainsContextValues>({
  trainsList: [],
  trainsDetails: undefined,
  handlePushToTrainsDetails: () => {},
  trainId: '',
});
const Parent = () => {
  const [trainsDetails, setTrainsDetails] =
    useState<TrainsDetailsResponseType>();
  useEffect(() => {
    const getTrainsDetail = async () => {
      try {
        const response = await fetch('your-api');
        const data: TrainsDetailsResponseType = await response.json();
        setTrainsDetails(data);
      } catch {
        // your logic for the failed request
      }
    };
    getTrainsDetail();
  }, []);
  const contextValue = useMemo(
    () => ({
      // undefined | data from api
      trainsDetails,
      // replace to actually
      trainsList: [],
      handlePushToTrainsDetails: () => {},
      trainId: '',
    }),
    [trainsDetails]
  );
  return (
    <TrainsContext.Provider value={contextValue}>
      <Child />
    </TrainsContext.Provider>
  );
};

const FallbackComponent = () => {
  return <div> No Data</div>;
};

const TrainsDetailsComponent = () => {
  return <div> Trains Data</div>;
};

const Child = () => {
  const { trainsDetails } = useContext(TrainsContext);
  // technically, the component can be rendered out of context and it should be ready for this
  if (!trainsDetails) {
    return <FallbackComponent />;
  }
  return <TrainsDetailsComponent data={trainsDetails} />;
};
