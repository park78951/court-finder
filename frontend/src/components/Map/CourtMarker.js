import React, { useMemo } from 'react';
import { Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { createFullCoordinate, compareCoordinates } from '../../myUtil';
import { defaultMapOptions } from '@initConfig';

const CourtMarker = ({
  mouseOverOutHandler,
  courtInfo,
}) => {
  const { marker } = defaultMapOptions;
  const { selectedCourt } = useSelector(state => state.storeOnSelection);
  
  const isSelectedCourt = useMemo(() => {
    return compareCoordinates(selectedCourt, courtInfo);
  }, [selectedCourt]);
  
  return (
    <>
      <Marker 
        position={ createFullCoordinate(courtInfo) }
        onMouseOver={ mouseOverOutHandler(courtInfo) }
        onMouseOut={ mouseOverOutHandler() }
        cursor='pointer'
        icon={ isSelectedCourt ? null : marker }
        animation={ isSelectedCourt && 2 }
      /> 
    </>
  );
};

export default React.memo(CourtMarker);