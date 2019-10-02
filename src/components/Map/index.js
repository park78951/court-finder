import React, { useState, useMemo, useContext, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { defaultMapOptions } from '../../config';
import { CourtContext } from '../../storage/CourtStore';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = () => {
  const { center, zoom, mapStyle, options } = defaultMapOptions;
  const [curCenter, setCurCenter] = useState(center);
  const { courtsData } = useContext(CourtContext);
  const hasCourtsData = courtsData.length;
   
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const setMarker = useMemo(
    () => {
      if(!hasCourtsData) return;
      return courtsData.map( ({ position }) => {
        return (
          <Marker
            key={ Date.now() }
            position={ position }
          />
        );
      });
    },
    [courtsData]
  );
  
  useEffect(() => {
    if(!hasCourtsData) return;
    const { position } = courtsData[0];
    setCurCenter(position);
  }, [courtsData]);

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
        // onRightClick={ clickMapHandler }
      >
        { setMarker }
      </GoogleMap>
    </MapContainer>
  );
};

export default Map;