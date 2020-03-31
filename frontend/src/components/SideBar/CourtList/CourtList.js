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

  const { court } = routes;

  const searchedItems = useMemo(() => {
    return searchedCourts.map(searchedCourt => (
      <Link 
        key={uniqueId(searchedCourt.name)} 
        href={ `${court}/[id]/detail` }
        as={`${court}/${searchedCourt.id}/detail`}
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