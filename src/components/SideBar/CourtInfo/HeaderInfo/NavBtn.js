import React from 'react';
import { MdInfo, MdAssignment } from 'react-icons/md';
import Style from './NavBtnStyle';

const NavBtn = () => {
  return (
    <Style.NavBtnStyle>
      <div>
        <button>
          <MdInfo size={ 40 } />
        </button>
        <div></div>
      </div>
      <div>
        <button>
          <MdAssignment size={ 40 } />
        </button>
        <div></div>
      </div>
    </Style.NavBtnStyle>
  );
};

export default NavBtn;