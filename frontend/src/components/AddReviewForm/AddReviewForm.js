import React from 'react';
import Textarea from 'react-expanding-textarea';
import { Button } from '@components/lib';
import Style from './AddReviewFormStyle';

const nickname = '쌍큐';
const location = '한강 농구장'

const AddReviewForm = () => {
  return (
    <Style.AddReviewFormWrapper>
      <h2>
        {location}
      </h2>
      <Style.UserProfile>
        <Style.UserProfileAvatar>
          {nickname[0]}
        </Style.UserProfileAvatar>
        <Style.UserProfileNickname>
          {nickname}
        </Style.UserProfileNickname>
      </Style.UserProfile>
      <Style.PostUIWrapper>
        <Style.TextForm>
          <Textarea 
            className='post__textarea'
            maxLength='3000'
            placeholder='코트 사용 경험을 공유해주세요.'
          />
        </Style.TextForm>
      </Style.PostUIWrapper>
      <Style.buttonsWrapper>
        <Button
          size='small'
          color='cancel'
        >
          취소
        </Button>
        <Button
          size='small'
        >
          게시
        </Button>
      </Style.buttonsWrapper>
    </Style.AddReviewFormWrapper>
  );
};

export default AddReviewForm;