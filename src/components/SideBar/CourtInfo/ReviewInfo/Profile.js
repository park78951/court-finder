import React from 'react';
import Style from './ProfileStyle';

const UserProfile = () => {
  return (
    <Style.ProfileWrapper>
      <did>
        <div></div>
        <h3>농구쟁이</h3>
      </did>
      <div>2019.10.27</div>
    </Style.ProfileWrapper>
  );
};

export default UserProfile;