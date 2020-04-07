import React from 'react';
import { MdDelete, MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@components/lib';
import { iconSize } from '@config';
import { closeReviewDeleter, requestDeletingMyReview } from '@actions';
import Style from './ReviewDeleterStyle';

const DeleteReviewChecker = () => {
  const { myReview } = useSelector(({ review }) => review);
  const dispatch = useDispatch();

  const onClickDeleteBtn = () => {
    dispatch(requestDeletingMyReview(myReview.id));
  };

  const onClickCacelBtn = () => {
    dispatch(closeReviewDeleter());
  };

  return (
    <Style.DeleteReviewWrapper>
      <h2>리뷰를 삭제하시겠습니까?</h2>
      <Style.ButtonWrapper>
        <Button size='small' onClick={onClickDeleteBtn}>
          <MdDelete size={iconSize.review} />
          <span> 삭제</span>
        </Button>
        <Button 
          size='small' 
          color='cancel'
          onClick={onClickCacelBtn}
        >
          <MdCancel size={iconSize.review} />
          <span> 취소</span>
        </Button>
      </Style.ButtonWrapper>
    </Style.DeleteReviewWrapper>
  );
};

export default DeleteReviewChecker;