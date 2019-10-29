import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import CourtItem from './CourtItem';
import { createUniqueKey } from '../../../helper/myUtil';
import { Link } from 'react-router-dom';
import Loading from '../../Loading';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const CourtList = () => {
  const { searchedCourts, isSearching } = useContext(CourtContext);
  // const courtsData = searchedCourts.length ? searchedItems : JSON.parse(localStorage.getItem('filteredInfo'));

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={createUniqueKey()} 
        to='/courtinfo/detail'
      >
        <CourtItem 
          searchedCourt = { searchedCourt }
        />
      </Link>
    ));
  }, [searchedCourts]);
  
  return (
    isSearching
      ? <Loading />
      : <Style.CourtListWrapper>
        { searchedCourts.length
          ? searchedItems 
          : <p>검색 데이터가 없습니다.</p>
        }
      </Style.CourtListWrapper>
  );
};

CourtList.propType = {
  searchedCourts: PropTypes.array
};

export default React.memo(CourtList);