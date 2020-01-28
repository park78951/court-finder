import React from 'react';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import { MdInfo, MdAssignment } from 'react-icons/md';
import { routes, iconSize } from '@initConfig';
import Style from './NavBtnStyle';

const NavBtn = () => {
  const { review, infoDetail } = routes;
  const { headerInfo_nav } = iconSize;

  return (
    <Style.NavBtnStyle>
      <Link
        href={ infoDetail }
      >
        <a>
          <MdInfo 
            size={ headerInfo_nav }
          />
        </a>
      </Link>
      <Link 
        href={ review }
      >
        <a>
          <MdAssignment 
            size={ headerInfo_nav }
          />
        </a>
      </Link>
    </Style.NavBtnStyle>
  );
};

export default NavBtn;