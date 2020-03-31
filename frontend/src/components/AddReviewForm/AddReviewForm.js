import React, { useCallback } from 'react';
import Textarea from 'react-expanding-textarea';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Button, UserProfile } from '@components/lib';
import { closeAddReviewForm, requestUploadReview } from '@actions';
import { useOnChange } from '@hooks';
import Style from './AddReviewFormStyle';

const AddReviewForm = () => {
  const [text, setText] = useOnChange('');
  const {nickname, courtName} = useSelector(state => ({
    nickname: state.user.nickname,
    courtName: state.courts.selectedCourt.name,
  }));
  const dispatch = useDispatch();
  const { query } = useRouter();

  const onCloseAddForm = useCallback(() => {
    dispatch(closeAddReviewForm());
  }, []);

  const onSubmitReview = event => {
    event.preventDefault();
    
    dispatch(requestUploadReview({ 
      text, 
      courtId: query.id,
      nickname,
    }));
    dispatch(closeAddReviewForm());
  };
  

  return (
    <Style.AddReviewFormWrapper>
      <h2>
        {courtName}
      </h2>
      <UserProfile nickname={nickname} />
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