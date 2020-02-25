import React from 'react';
import { MdInfo, MdAssignment } from 'react-icons/md';
import { useSelector } from 'react-redux';
import ActiveLink from '@components/lib/ActiveLink';
import { routes, iconSize } from '@config';
import Style from './NavBtnStyle';

const { headerInfo_nav } = iconSize;
const { court } = routes;

const NavBtn = ({ id }) => {
  return (
    <Style.NavBtnStyle>
      <ActiveLink
        href={ `${court}/[id]/detail` }
        as={`${court}/${id}/detail`}
        replace
      >
        <a className='link'>
          <MdInfo 
            size={ headerInfo_nav }
          />
        </a>
      </ActiveLink>
      <ActiveLink 
        href={ `${court}/[id]/review` }
        as={`${court}/${id}/review`}
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