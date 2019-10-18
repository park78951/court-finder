import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import CourtItem from './CourtItem';
import { createUniqueKey } from '../../../helper/myUtil';
import { Link } from 'react-router-dom';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const CourtList = () => {
  const { searchedInfo } = useContext(CourtContext);

  const searchedItems = useMemo(() => {
    return searchedInfo.map(({ 
      locationName,
      address,
      phone,
      in_out
    }) => (
      <Link 
        key={createUniqueKey()} 
        to='/courtinfo'
      >
        <CourtItem 
          locationName={ locationName }
          address={ address }
          phone={ phone }
          in_out={ in_out }
        />
      </Link>
    ));
  }, [searchedInfo]);
  
  return (
    <Style.CourtListWrapper>
      { searchedInfo.length
        ? searchedItems 
        : <p>코트를 검색해 주세요.</p>
      }
    </Style.CourtListWrapper>
  );
};

CourtList.propType = {
  searchedInfo: PropTypes.array
};

export default React.memo(CourtList);