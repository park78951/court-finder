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
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { defaultMapOptions } from '../../config/initConfig';
import { createFullCoordinate, keyMaker, getCenterPosition } from '../../myUtil';
import CourtMarker from './CourtMarker';
import Style from './MapStyle';

const Map = ({ location }) => {
  const { pathname } = location;
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

  const { searchedCourts, selectedCourt, mouseoverList } = useSelector(state => ({
    searchedCourts: state.storeOnSearch.searchedCourts,
    selectedCourt: state.storeOnSelection.selectedCourt,
    mouseoverList: state.storeOnSelection.mouseoverList,
  }));
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const onMouseOverAndOutOfMarker = useCallback((courtInfo) => () => {
    setMouseoverMarker(courtInfo);
  }, [searchedCourts]);

  const markers = useMemo(() => {
    return searchedCourts.map((courtInfo) => {
      const { locationName } = courtInfo;
      return (
        <CourtMarker
          key={ keyMaker(locationName) }
          courtInfo={ courtInfo }
          mouseOverOutHandler={ onMouseOverAndOutOfMarker }
        />            
      );
    });
  }, [searchedCourts]);

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
          <h2>{ onMouseOverCourt.locationName }</h2>
          <p>{ onMouseOverCourt.address }</p>
        </div>
      </InfoBox>
    );
  }, [mouseoverList, mouseoverMarker]);
  
  useEffect(() => {
    if (!searchedCourts.length) return;

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
        { pathname !== '/' && markers }
        { infoBox }
      </GoogleMap>
    </Style.MapContainer>
  );
};

Map.propTypes = {
  searchedCourts: PropTypes.array,
};

export default React.memo(withRouter(Map));