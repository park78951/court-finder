import React, { useContext, useMemo } from 'react';
import { CourtContext } from '../../../courtStore/CourtStore';
import CourtItem from './CourtItem';
import { createUniqueKey } from '../../../helper/myUtil';
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
      <CourtItem 
        key={createUniqueKey()} 
        locationName={ locationName }
        address={ address }
        phone={ phone }
        in_out={ in_out }
      />
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