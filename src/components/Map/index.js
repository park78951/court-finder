import React, { useState, useMemo, useContext, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { defaultMapOptions } from '../../config';
import { CourtContext } from '../../courtStore/CourtStore';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = () => {
  const { center, zoom, mapStyle, options } = defaultMapOptions;
  const [curCenter, setCurCenter] = useState(center);
  const { courtsData } = useContext(CourtContext);
  const hasCourtsData = courtsData.loading;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const setMarker = useMemo(
    () => {
      if(hasCourtsData) return;
      const { courtsInfo } = courtsData;
      return courtsInfo.map( ({ position, locationName }) => {
        // console.log(position)
        return (
          <Marker
            key={ locationName }
            position={ position }
          />
        );
      });
    },
    [courtsData.courtsInfo]
  );
  
  useEffect(() => {
    if(hasCourtsData) return;
    const { position } = courtsData.courtsInfo[0];
    setCurCenter(position);
  }, [courtsData.courtsInfo]);

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