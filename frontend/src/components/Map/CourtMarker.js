import React from 'react';
import { Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { createFullCoordinate, compareCoordinates } from '@myUtils';
import { defaultMapOptions } from '@config';

const CourtMarker = ({
  mouseOverOutHandler,
  courtInfo,
}) => {
  const { marker } = defaultMapOptions;
  const { selectedCourt } = useSelector(({ courts }) => courts);
  
  return (
    <>
      <Marker 
        position={ createFullCoordinate(courtInfo) }
        onMouseOver={ mouseOverOutHandler(courtInfo) }
        onMouseOut={ mouseOverOutHandler() }
        cursor='pointer'
        icon={ compareCoordinates(selectedCourt, courtInfo) ? null : marker }
        animation={ compareCoordinates(selectedCourt, courtInfo) && 2 }
      /> 
    </>
  );
};

CourtMarker.propTypes = {
  mouseOverOutHandler: PropTypes.func.isRequired,
  courtInfo: PropTypes.object.isRequired,
}

export default React.memo(CourtMarker);