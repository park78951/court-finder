import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

import CourtItem from './CourtItem';
import { routes } from '../../../config/initConfig';
import Style from './CourtListStyle';

const CourtList = () => {
  const { searchedCourts } = useSelector(state => state.storeOnSearch);

  const { infoDetail } = routes;

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={_.uniqueId(searchedCourt.name)} 
        to={ infoDetail }
      >
        <CourtItem 
          searchedInfo={ searchedCourt }
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