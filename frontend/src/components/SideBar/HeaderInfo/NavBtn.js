import React from 'react';
import { MdInfo, MdAssignment } from 'react-icons/md';
import { useSelector } from 'react-redux';
import ActiveLink from '@components/lib/ActiveLink';
import { routes, iconSize } from '@initConfig';
import Style from './NavBtnStyle';

const NavBtn = () => {
  const { review, infoDetail } = routes;
  const { headerInfo_nav } = iconSize;
  const { selectedCourt } = useSelector(({ courtStore }) => courtStore);

  return (
    <Style.NavBtnStyle>
      <ActiveLink
        href={ `${infoDetail}/[id]` }
        as={`${infoDetail}/${selectedCourt.id}`}
        replace
      >
        <a className='link'>
          <MdInfo 
            size={ headerInfo_nav }
          />
        </a>
      </ActiveLink>
      <ActiveLink 
        href={ `${review}/[id]` }
        as={`${review}/${selectedCourt.id}`}
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