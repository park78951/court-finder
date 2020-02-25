import React from 'react';
import PropTypes from 'prop-types';
import UserMenu from './UserMenu';
import Style from './UserStyle';

const User = ({ 
  onClickUser, 
  isUserMenuOpen, 
  onLogout,
  nickname,
}) => {
  return (
    <Style.UserWrapper>
      <div 
        className='user__name'
        onClick={onClickUser}
      >
        { nickname[0] }
      </div>
      { isUserMenuOpen && (
        <UserMenu 
          onLogout={onLogout}
        />
      )}
    </Style.UserWrapper>
  );
};

User.propTypes = {
  onClickUser: PropTypes.func.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
  nickname: PropTypes.string.isRequired,
};

export default User;