import React from 'react';
import Style from './PhotosStyle';

const Photos = () => {
  return (
    <Style.PhotosWrapper>
      <p>사진 정보 없음</p>
    </Style.PhotosWrapper>
  );
};

export default React.memo(Photos);