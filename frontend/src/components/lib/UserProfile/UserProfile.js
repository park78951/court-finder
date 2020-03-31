import React from 'react';
import Style from './UserProfileStyle';
import PropTypes from 'prop-types';

const UserProfile = ({ nickname }) => {
  return (
    <Style.UserProfile>
      <Style.UserProfileAvatar>
        {nickname[0]}
      </Style.UserProfileAvatar>
      <Style.UserProfileNickname>
        {nickname}
      </Style.UserProfileNickname>
    </Style.UserProfile>
  );
};

UserProfile.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default React.memo(UserProfile);