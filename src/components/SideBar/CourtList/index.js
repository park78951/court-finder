import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import CourtItem from './CourtItem';
import { createUniqueKey } from '../../../helper/myUtil';
import { Link } from 'react-router-dom';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const CourtList = () => {
  const { searchedCourts } = useContext(CourtContext);

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={createUniqueKey()} 
        to='/courtinfo'
      >
        <CourtItem 
          searchedCourt = { searchedCourt }
        />
      </Link>
    ));
  }, [searchedCourts]);
  
  return (
    <Style.CourtListWrapper>
      { searchedCourts.length
        ? searchedItems 
        : <p>코트를 검색해 주세요.</p>
      }
    </Style.CourtListWrapper>
  );
};

CourtList.propType = {
  searchedCourts: PropTypes.array
};

export default React.memo(CourtList);