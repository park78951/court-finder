import React from 'react';
import { MdInfo, MdAssignment } from 'react-icons/md';
import ActiveLink from '@components/lib/ActiveLink';
import { routes, iconSize } from '@initConfig';
import Style from './NavBtnStyle';

const NavBtn = () => {
  const { review, infoDetail } = routes;
  const { headerInfo_nav } = iconSize;

  return (
    <Style.NavBtnStyle>
      <ActiveLink
        href={ infoDetail }
        replace
      >
        <a className='link'>
          <MdInfo 
            size={ headerInfo_nav }
          />
        </a>
      </ActiveLink>
      <ActiveLink 
        href={ review }
        replace
      >
        <a className='link'>
          <MdAssignment 
            size={ headerInfo_nav }
          />
        </a>
      </ActiveLink>
    </Style.NavBtnStyle>
  );
};

export default NavBtn;