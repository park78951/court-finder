import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import CourtItem from './CourtItem';
import { routes } from '@config';
import Style from './CourtListStyle';

const CourtList = () => {
  const { searchedCourts } = useSelector(({ court }) => court);

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={uniqueId(searchedCourt.name)} 
        href={ `${routes.DYNAMIC_COURT_DETAIL}` }
        as={`${routes.COURT}/${searchedCourt.id}${routes.DETAIL}`}
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