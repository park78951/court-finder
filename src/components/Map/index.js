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
  } = defaultMapOptions;

  const [curCenter, setCurCenter] = useState(center);
  const [markerInfos, setMarkerInfos] = useState({});
  const [mouseOverPlace, setMouseOverPlace] = useState(null);

  const { searchedCourts, selectedCourt } = useSelector(state => ({
    searchedCourts: state.storeOnSearch.searchedCourts,
    selectedCourt: state.storeOnSelection.selectedCourt
  }));
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });

  const onLoadMarker = useCallback((locationName) => (markerInfo) => {
    setMarkerInfos(prevState => {
      if (!prevState) return {[locationName]: markerInfo};
      return {...prevState, [locationName]: markerInfo};
    });
  }, [searchedCourts]);

  const onMouseOverAndOutOfMarker = useCallback((courtInfo) => () => {
    setMouseOverPlace(courtInfo);
  }, [searchedCourts]);

  // SetAnimation state를 만들어서 animation route에 따른 관리
  const setMarkers = useMemo(() => {
    return searchedCourts.map((courtInfo) => {
      const { locationName } = courtInfo;
      return pathname !== '/' && (
        <Marker
          key={ keyMaker(locationName) }
          position={ createFullCoordinate(courtInfo) }
          onLoad={ onLoadMarker(locationName) }
          onMouseOver={ onMouseOverAndOutOfMarker(courtInfo) }
          onMouseOut={ onMouseOverAndOutOfMarker(null) }
          cursor='pointer'
          icon={ marker }
        />            
      );
    });
  }, [searchedCourts, pathname]);
  
  useEffect(() => {
    if(!searchedCourts.length) return;
    setCurCenter(
      pathname === '/search' 
        ? createFullCoordinate(searchedCourts[0])
        : createFullCoordinate(selectedCourt)
    );
  }, [searchedCourts, selectedCourt]);

  useEffect(() => {
    setMarkerInfos(null);
  }, [searchedCourts]);
  
  return isLoaded && (
    <Style.MapContainer>
      <GoogleMap
        zoom={ zoom }
        center={ curCenter }
        mapContainerStyle={ mapStyle }
        mapTypeId={ mapTypeId }
        options={ options }
      >
        { setMarkers }
        { mouseOverPlace && (
          <InfoBox
            anchor={ markerInfos[mouseOverPlace.locationName] }
          >
            <div
              className='infoBox__container'
            >
              <h2>{ mouseOverPlace.locationName }</h2>
              <p>{ mouseOverPlace.address }</p>
            </div>
          </InfoBox>
        )}
      </GoogleMap>
    </Style.MapContainer>
  );
};

Map.propTypes = {
  searchedCourts: PropTypes.array,
};

export default withRouter(React.memo(Map));