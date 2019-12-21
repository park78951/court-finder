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
  InfoWindow
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { defaultMapOptions } from '../../config/initConfig';
import { createFullCoordinate, keyMaker } from '../../myUtil';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = ({ location }) => {
  const { pathname } = location;
  const { 
    center, 
    zoom, 
    mapStyle, 
    options, 
    mapTypeId 
  } = defaultMapOptions;

  const [curCenter, setCurCenter] = useState(center);
  const [markerInfos, setMarkerInfos] = useState({});
  const [mouseOverPlace, setMouseOverPlace] = useState(null);

  const { searchedCourts, selectedCourt } = useSelector(state => ({
    searchedCourts: state.storeOnSearch.searchedCourts,
    selectedCourt: state.storeOnSelection.selectedCourt
  }));
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });
  

  const onLoadMarker = useCallback((locationName) => (markerInfo) => {
    setMarkerInfos(prevState => {
      return {...prevState, [locationName]: markerInfo};
    });
  }, [mouseOverPlace]);

  const onMouseOverHandler = useCallback((courtInfo) => {
    return () => {
      setMouseOverPlace(courtInfo);
    };
  }, [searchedCourts]);

  const onMouseOutHandler = useCallback(() => {
    setMouseOverPlace(null);
  }, []);

  // SetAnimation state를 만들어서 animation route에 따른 관리
  const setMarkers = useMemo(() => {
    return searchedCourts.map((courtInfo) => {
      const { locationName } = courtInfo;
      return pathname !== '/' && (
        <Marker
          key={ keyMaker(locationName) }
          position={ createFullCoordinate(courtInfo) }
          onLoad={ onLoadMarker(locationName) }
          onMouseOver={ onMouseOverHandler(courtInfo) }
          onMouseOut={ onMouseOutHandler }
          cursor='pointer'
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

  if(loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  
  return isLoaded && (
    <MapContainer>
      <GoogleMap
        zoom={ zoom }
        center={ curCenter }
        mapContainerStyle={ mapStyle }
        mapTypeId={ mapTypeId }
        options={ options }
      >
        { setMarkers }
        { mouseOverPlace && (
          <InfoWindow
            anchor={markerInfos[mouseOverPlace.locationName]}
          >
            <div style={{
              background: `white`,
              border: `1px solid #ccc`,
              padding: 15
            }}>
              <h1>InfoWindow</h1>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </MapContainer>
  );
};

Map.propTypes = {
  searchedCourts: PropTypes.array,
};

export default withRouter(React.memo(Map));