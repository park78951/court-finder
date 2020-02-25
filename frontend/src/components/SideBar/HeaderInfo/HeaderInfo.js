import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { MdArrowBack } from 'react-icons/md';
import PropTypes from 'prop-types';
import Title from './Title';
import Address from './Address';
import Additional from './Additional';
import NavBtn from './NavBtn';
import Style from './HeaderInfoStyle';
import { selectCourt } from '@actions';
import { routes, iconSize } from '@config';

const { 
  headerInfo_goback,
} = iconSize;

const HeaderInfo = () => {
  const { selectedCourt } = useSelector(({ courts }) => courts);
  const router = useRouter();
  const dispatch = useDispatch();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(selectCourt()); 
    }
  }, []);
  
  return selectedCourt && (
    <Style.HeaderWrapper>
      <button onClick={goBack}>
        <MdArrowBack size={headerInfo_goback} />
      </button>
      <Title { ...selectedCourt } />
      <Address { ...selectedCourt } />
      <Additional />
      <NavBtn id={selectedCourt.id}/>
    </Style.HeaderWrapper>
  );
};

HeaderInfo.propTypes = {
  selectedCourt: PropTypes.array
};

export default React.memo(HeaderInfo);