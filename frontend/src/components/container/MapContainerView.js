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
import { uniqueId } from 'lodash';
import { defaultMapOptions } from '@config';
import { createFullCoordinate, getCenterPosition } from '@myUtils';
import { CourtMarker, InfoBoxContent } from '@components/Map';
import Style from './MapContainerStyle';

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

const MapContainerView = () => {
  const [curCenter, setCurCenter] = useState(center);
  const [curZoom, setCurZoom] = useState(defaultZoom);
  const [mouseoverMarker, setMouseoverMarker] = useState(null);
  
  const { route } = useRouter();
  const { searchedCourts, selectedCourt, mouseoverList } = useSelector(({ courts }) => courts);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_KEY
  });

  const onMouseOverAndOutOfMarker = useCallback((courtInfo) => () => {
    setMouseoverMarker(courtInfo);
  }, [searchedCourts]);

  const markersOnSearch = useMemo(() => {
    if(!searchedCourts.length) return null;
    return searchedCourts.map((courtInfo) => {
      return (
        <CourtMarker
          key={ uniqueId(courtInfo.name) }
          courtInfo={ courtInfo }
          mouseOverOutHandler={ onMouseOverAndOutOfMarker }
        />            
      );
    });
  }, [searchedCourts]);

  const markerOnSelected = useMemo(() => {
    return (
      <CourtMarker
        courtInfo={ selectedCourt }
        mouseOverOutHandler={ onMouseOverAndOutOfMarker }
      />            
    );
  }, [!searchedCourts.length && selectedCourt]);

  const infoBox = useMemo(() => {
    const onMouseOverCourt = mouseoverList || mouseoverMarker;
    return isLoaded 
      && onMouseOverCourt 
      && (
        <InfoBox
          position={ createFullCoordinate(onMouseOverCourt) }
          options={{ 
            pixelOffset: new window.google.maps.Size(-infoBoxWidth/2, infoBoxMarginTop),
            closeBoxURL: "", 
          }}
        >
          <InfoBoxContent 
            name={ onMouseOverCourt.name }
            address={ onMouseOverCourt.address }
          />
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
    <Style.MapContainerWrapper infoBoxWidth={ infoBoxWidth }>
      {isLoaded && <GoogleMap
        zoom={ curZoom }
        center={ curCenter }
        mapContainerStyle={ mapStyle }
        mapTypeId={ mapTypeId }
        options={ options }
      >
        { route !== '/' && markersOnSearch }
        { route !== '/' 
          && searchedCourts.length === 0
          && selectedCourt
          && markerOnSelected }
        { window.google && infoBox }
      </GoogleMap>}
    </Style.MapContainerWrapper>
  );
};

export default React.memo(MapContainerView);