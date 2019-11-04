import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import CourtItem from './CourtItem';
import { routes } from '../../../config/initConfig';
import { createUniqueKey } from '../../../helper/myUtil';
import { Link } from 'react-router-dom';
import Loading from '../../Loading';
import Refetch from '../Refetch';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const CourtList = () => {
  const { 
    searchedCourts, 
    isSearching, 
    isError 
  } = useContext(CourtContext);
  const { infoDetail } = routes;

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={createUniqueKey()} 
        to={ infoDetail }
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
      : isError 
        ? <Refetch />
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