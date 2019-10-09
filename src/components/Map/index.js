import React, { useState, useMemo, useContext, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { defaultMapOptions } from '../../config';
import { CourtContext } from '../../courtStore/CourtStore';
import { createUniqueKey } from '../../helper/myUtil';
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
      if(!courtsInfo.length) return;
      return courtsInfo.map( ({ coordinates }) => {
        return (
          <Marker
            key={ createUniqueKey() }
            position={ coordinates }
          />
        );
      });
    },
    [courtsInfo]
  );
  
  useEffect(() => {
    if(!courtsInfo.length) return;
    const { coordinates } = courtsInfo[0];
    setCurCenter(coordinates);
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