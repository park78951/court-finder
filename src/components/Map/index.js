import React, { useState, useMemo, useContext, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { defaultMapOptions } from '../../config';
import { CourtContext } from '../../courtStore/CourtStore';
import { createUniqueKey, convertCoordinatesNum } from '../../helper/myUtil';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = () => {
  const { center, zoom, mapStyle, options } = defaultMapOptions;
  const [curCenter, setCurCenter] = useState(center);
  const { courtsInfo } = useContext(CourtContext);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const clickMapHandler = (e) => {
    console.log(e);
  };

  const setMarker = useMemo(
    () => {
      console.log(courtsInfo);
      if(!courtsInfo.length) return;
      return courtsInfo.map( courtInfo => {
        const position = convertCoordinatesNum(courtInfo);
        return (
          <Marker
            key={ createUniqueKey() }
            position={ position }
          />
        );
      });
    },
    [courtsInfo]
  );
  
  useEffect(() => {
    if(!courtsInfo.length) return;
    const position = convertCoordinatesNum(courtsInfo[0]);
    setCurCenter(position);
  }, [courtsInfo]);

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

export default Map;