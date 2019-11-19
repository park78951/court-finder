import React, { 
  useState, 
  useMemo, 
  useEffect 
} from 'react';
import { 
  GoogleMap, 
  useLoadScript, 
  Marker 
} from '@react-google-maps/api';
import { defaultMapOptions } from '../../config/initConfig';
import { 
  createUniqueKey, 
  createFullCoordinate,
} from '../../helper/myUtil';
import { withRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = ({ location }) => {
  const { 
    center, 
    zoom, 
    mapStyle, 
    options, 
    mapTypeId 
  } = defaultMapOptions;
  const [curCenter, setCurCenter] = useState(center);
  const { searchedCourts, selectedCourt } = useSelector(state => ({
    searchedCourts: state.storeOnSearch.searchedCourts,
    selectedCourt: state.storeOnSelection.selectedCourt
  }));
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.KEY
  });
  const { pathname } = location;

  const clickMapHandler = (e) => {
    console.log(e);
  };

  // SetAnimation stat를 만들어서 animation route에 따른 관리
  const setMarkers = useMemo(
    () => {
      return searchedCourts.map( courtInfo => {
        return (
          <Marker
            key={ createUniqueKey() }
            position={ createFullCoordinate(courtInfo) }
          />
        );
      });
    }, [searchedCourts, selectedCourt]);
  
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
        onRightClick={ clickMapHandler }
      >
        { setMarkers }
      </GoogleMap>
    </MapContainer>
  );
};

Map.propTypes = {
  searchedCourts: PropTypes.array,
  isLoaded: PropTypes.bool
};

export default withRouter(Map);