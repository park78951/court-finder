import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

import CourtItem from './CourtItem';
import { routes } from '../../../config/initConfig';
import { Pagination } from '../../lib';
import { paginationConfig } from '../../../config/initConfig';
import Style from './CourtListStyle';

const CourtList = () => {
  const { searchedCourts, totalCourts } = useSelector(state => state.storeOnSearch);
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

  const changeCurrentPage = useCallback(({ target }) => {
    console.log(target.closest('button'));
  }, []);
  
  return (
    <Style.CourtListWrapper>
      <div>
        { searchedItems }
      </div>
      <Pagination 
        clickHandler={ changeCurrentPage }
        totalCourts={ 400 }
        { ...paginationConfig }
      />
    </Style.CourtListWrapper>
  );
};

CourtList.propType = {
  searchedCourts: PropTypes.array
};

export default React.memo(CourtList);