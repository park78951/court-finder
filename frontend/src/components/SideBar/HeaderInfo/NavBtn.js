import React from 'react';
import { MdInfo, MdAssignment } from 'react-icons/md';
import ActiveLink from '@components/lib/ActiveLink';
import { routes, iconSize } from '@config';
import Style from './NavBtnStyle';

const NavBtn = ({ id }) => {
  return (
    <Style.NavBtnStyle>
      <ActiveLink
        href={ `${routes.court}/[id]/detail` }
        as={`${routes.court}/${id}/detail`}
        replace
      >
        <a className='link'>
          <MdInfo 
            size={ iconSize.headerInfo_nav }
          />
        </a>
      </ActiveLink>
      <ActiveLink 
        href={ `${routes.court}/[id]/review` }
        as={`${routes.court}/${id}/review`}
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