import React, { useState, useMemo, useContext, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { defaultMapOptions } from '../../config';
import { CourtContext } from '../../courtStore/CourtStore';
import { createUniqueKey, convertCoordinatesNum } from '../../helper/myUtil';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = () => {
  const { center, zoom, mapStyle, options } = defaultMapOptions;
  const [curCenter, setCurCenter] = useState(center);
  const { searchedInfo } = useContext(CourtContext);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const clickMapHandler = (e) => {
    console.log(e);
  };

  const setMarker = useMemo(
    () => {
      console.log(searchedInfo);
      if(!searchedInfo.length) return;
      return searchedInfo.map( courtInfo => {
        const position = convertCoordinatesNum(courtInfo);
        return (
          <Marker
            key={ createUniqueKey() }
            position={ position }
          />
        );
      });
    },
    [searchedInfo]
  );
  
  useEffect(() => {
    if(!searchedInfo.length) return;
    const position = convertCoordinatesNum(searchedInfo[0]);
    setCurCenter(position);
  }, [searchedInfo]);

  if(loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  
  return isLoaded && (
    <MapContainer>
      <GoogleMap
        zoom={ zoom }
        center={ curCenter }
        mapContainerStyle={ mapStyle }
        mapTypeId='roadmap'
        options={ options }
        onRightClick={ clickMapHandler }
      >
        { setMarker }
      </GoogleMap>
    </MapContainer>
  );
};

Map.propTypes = {
  searchedInfo: PropTypes.array,
  isLoaded: PropTypes.bool
};

export default Map;