import React, { 
  useState, 
  useMemo, 
  useEffect, 
  useCallback
} from 'react';
import { 
  GoogleMap, 
  useLoadScript, 
  Marker,
  InfoBox
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { defaultMapOptions } from '../../config/initConfig';
import { createFullCoordinate, keyMaker } from '../../myUtil';
import Style from './indexStyle';

const Map = ({ location }) => {
  const { pathname } = location;
  const { 
    center, 
    zoom, 
    mapStyle, 
    options, 
    mapTypeId,
    marker,
    infoBoxWidth,
    infoBoxMarginTop,
  } = defaultMapOptions;

  const [curCenter, setCurCenter] = useState(center);
  const [mouseOverCourt, setmouseOverCourt] = useState(null);

  const { searchedCourts, selectedCourt, listOverCourt } = useSelector(state => ({
    searchedCourts: state.storeOnSearch.searchedCourts,
    selectedCourt: state.storeOnSelection.selectedCourt,
    listOverCourt: state.storeOnSelection.listOverCourt,
  }));

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const onMouseOverAndOutOfMarker = useCallback((courtInfo) => () => {
    setmouseOverCourt(courtInfo);
  }, [searchedCourts]);

  const markers = useMemo(() => {
    return searchedCourts.map((courtInfo) => {
      const { locationName } = courtInfo;
      return pathname !== '/' && (
        <Marker
          key={ keyMaker(locationName) }
          position={ createFullCoordinate(courtInfo) }
          onMouseOver={ onMouseOverAndOutOfMarker(courtInfo) }
          onMouseOut={ onMouseOverAndOutOfMarker(null) }
          cursor='pointer'
          icon={ marker }
        />            
      );
    });
  }, [searchedCourts, pathname]);

  const infoBox = useMemo(() => {
    const onMouseOverCourt = listOverCourt || mouseOverCourt;
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
    )
  }, [listOverCourt, mouseOverCourt]);
  
  useEffect(() => {
    if(!searchedCourts.length) return;
    setCurCenter(
      pathname === '/search' 
        ? createFullCoordinate(searchedCourts[0])
        : createFullCoordinate(selectedCourt)
    );
  }, [searchedCourts, selectedCourt]);

  return isLoaded && (
    <Style.MapContainer infoBoxWidth={ infoBoxWidth }>
      <GoogleMap
        zoom={ zoom }
        center={ curCenter }
        mapContainerStyle={ mapStyle }
        mapTypeId={ mapTypeId }
        options={ options }
      >
        { markers }
        { infoBox }
      </GoogleMap>
    </Style.MapContainer>
  );
};

Map.propTypes = {
  searchedCourts: PropTypes.array,
};

export default React.memo(withRouter(Map));