import React, { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { defaultValue } from '../../config';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = () => {
  const { center, zoom, mapStyle, options } = defaultValue;
  const [curCenter, setCurCenter] = useState(center);
  const [curMarker, setCurMarker] = useState();
   
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const clickMapHandler = ({ latLng }) => {
    setCurMarker(latLng.toJSON());
  }

  const popupContextMenu = e => {
    console.log(e);
  }

  const moveMarker = useMemo(
    () => {
      return (
        <Marker
          key={ Date.now() }
          position={ curMarker }
        />
      )
    },
    [curMarker]
  )

  const renderMap = () => {
    return (
      <MapContainer>
        <GoogleMap
          zoom={ zoom }
          center={ curCenter }
          mapContainerStyle={ mapStyle }
          mapTypeId='roadmap'
          options={ options }
          onRightClick={ clickMapHandler }
        >
          { moveMarker }
        </GoogleMap>
      </MapContainer>
    )
  }

  if(loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }
  
  return isLoaded ? renderMap() : '<Spinner />'
}

export default Map;