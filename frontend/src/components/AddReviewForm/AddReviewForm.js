import React, { useCallback } from 'react';
import Textarea from 'react-expanding-textarea';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { Button } from '@components/lib';
import { closeAddReviewForm, requestUploadReview } from '@actions'
import { useOnChange } from '@hooks';
import Style from './AddReviewFormStyle';

const nickname = '쌍큐';
const location = '한강 농구장'

const AddReviewForm = () => {
  const [text, setText] = useOnChange('');
  const dispatch = useDispatch();
  const { query } = useRouter();

  const onSubmitReview = event => {
    event.preventDefault();
    dispatch(requestUploadReview({ 
      text, 
      courtId: query.id
    }))
  }
  
  const onCloseAddForm = useCallback(() => {
    dispatch(closeAddReviewForm());
  }, []);

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
            onChange={setText}
          />
        </Style.TextForm>
      </Style.PostUIWrapper>
      <Style.buttonsWrapper>
        <Button
          size='small'
          color='cancel'
          onClick={onCloseAddForm}
        >
          취소
        </Button>
        <Button
          size='small'
          type='submit'
          onClick={onSubmitReview}
        >
          게시
        </Button>
      </Style.buttonsWrapper>
    </Style.AddReviewFormWrapper>
  );
};

export default React.memo(AddReviewForm);