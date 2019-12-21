import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import CourtItem from './CourtItem';
import { routes } from '../../../config/initConfig';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const CourtList = () => {
  const searchedCourts = useSelector(state => state.storeOnSearch.searchedCourts);
  const { infoDetail } = routes;

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={uniqid()} 
        to={ infoDetail }
      >
        <CourtItem 
          searchedCourt = { searchedCourt }
        />
      </Link>
    ));
  }, [searchedCourts]);
  
  return (
    <Style.CourtListWrapper>
      { searchedItems }
    </Style.CourtListWrapper>
  );
};

CourtList.propType = {
  searchedCourts: PropTypes.array
};

export default React.memo(CourtList);