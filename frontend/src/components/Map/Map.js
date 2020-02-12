import React, { 
  useState, 
  useMemo, 
  useEffect, 
  useCallback
} from 'react';
import { 
  GoogleMap, 
  useLoadScript, 
  InfoBox
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import _ from 'lodash';
import { defaultMapOptions } from '@initConfig';
import { createFullCoordinate, getCenterPosition } from '@myUtils';
import CourtMarker from './CourtMarker';
import Style from './MapStyle';

const Map = () => {
  const { route } = useRouter();
  const { 
    center, 
    defaultZoom,
    selectedZoom,
    mapStyle, 
    options, 
    mapTypeId,
    infoBoxWidth,
    infoBoxMarginTop,
  } = defaultMapOptions;
  
  const [curCenter, setCurCenter] = useState(center);
  const [curZoom, setCurZoom] = useState(defaultZoom);
  const [mouseoverMarker, setMouseoverMarker] = useState(null);

  const { searchedCourts, selectedCourt, mouseoverList } = useSelector(({ courts }) => courts);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_KEY
  });

  const onMouseOverAndOutOfMarker = useCallback((courtInfo) => () => {
    setMouseoverMarker(courtInfo);
  }, [searchedCourts]);

  const markers = useMemo(() => {
    if(!searchedCourts.length) return null;
    return searchedCourts.map((courtInfo) => {
      const { name } = courtInfo;
      return (
        <CourtMarker
          key={ _.uniqueId(name) }
          courtInfo={ courtInfo }
          mouseOverOutHandler={ onMouseOverAndOutOfMarker }
        />            
      );
    });
  }, [searchedCourts]);

  const marker = useMemo(() => {
    return (
      <CourtMarker
        key={ _.uniqueId(name) }
        courtInfo={ selectedCourt }
        mouseOverOutHandler={ onMouseOverAndOutOfMarker }
      />            
    );
  }, [!searchedCourts.length && selectedCourt]);

  const infoBox = useMemo(() => {
    const onMouseOverCourt = mouseoverList || mouseoverMarker;
    return onMouseOverCourt && (
      <InfoBox
        position={ createFullCoordinate(onMouseOverCourt) }
        options={{ 
          pixelOffset: new window.google.maps.Size(-infoBoxWidth/2, infoBoxMarginTop),
          closeBoxURL: "", 
        }}
      >
        <div className='infoBox__container'>
          <h2>{ onMouseOverCourt.name }</h2>
          <p>{ onMouseOverCourt.address }</p>
        </div>
      </InfoBox>
    );
  }, [mouseoverList, mouseoverMarker]);
  
  useEffect(() => {
    if (!selectedCourt && !searchedCourts.length) return;

    if (selectedCourt) setCurCenter(createFullCoordinate(selectedCourt));
    else setCurCenter(getCenterPosition(searchedCourts));
  }, [searchedCourts, selectedCourt]);

  useEffect(() => {
    if (selectedCourt) setCurZoom(selectedZoom);
    else setCurZoom(defaultZoom);   
  }, [selectedCourt]);

  return isLoaded && (
    <Style.MapContainer infoBoxWidth={ infoBoxWidth }>
      <GoogleMap
        zoom={ curZoom }
        center={ curCenter }
        mapContainerStyle={ mapStyle }
        mapTypeId={ mapTypeId }
        options={ options }
      >
        { route !== '/' && markers }
        { route !== '/' 
          && !searchedCourts.length 
          && selectedCourt 
          && marker }
        { window.google && infoBox }
      </GoogleMap>
    </Style.MapContainer>
  );
};

export default React.memo(Map);