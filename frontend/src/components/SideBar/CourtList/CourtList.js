import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import _ from 'lodash';
import PropTypes from 'prop-types';
import CourtItem from './CourtItem';
import { routes } from '@initConfig';
import Style from './CourtListStyle';

const CourtList = () => {
  const { searchedCourts } = useSelector(({ courtStore }) => courtStore);

  const { infoDetail } = routes;

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={_.uniqueId(searchedCourt.name)} 
        href={ `${infoDetail}/[id]` }
        as={`${infoDetail}/${searchedCourt.id}`}
      >
        <a>
          <CourtItem 
            searchedInfo={ searchedCourt }
          />
        </a>
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