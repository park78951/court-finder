import React from 'react';
import { MdInfo, MdAssignment } from 'react-icons/md';
import ActiveLink from '@components/lib/ActiveLink';
import { routes, iconSize } from '@config';
import Style from './NavBtnStyle';

const NavBtn = ({ id }) => {
  return (
    <Style.NavBtnStyle>
      <ActiveLink
        href={ `${routes.DYNAMIC_COURT_DETAIL}` }
        as={`${routes.COURT}/${id}${routes.DETAIL}`}
        replace
      >
        <a className='link'>
          <MdInfo 
            size={ iconSize.headerInfo_nav }
          />
        </a>
      </ActiveLink>
      <ActiveLink 
        href={ `${routes.DYNAMIC_COURT_REVIEW}` }
        as={`${routes.COURT}/${id}${routes.REVIEW}`}
        replace
      >
        <a className='link'>
          <MdAssignment 
            size={ iconSize.headerInfo_nav }
          />
        </a>
      </ActiveLink>
    </Style.NavBtnStyle>
  );
};

export default NavBtn;