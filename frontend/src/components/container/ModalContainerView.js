import React from 'react';
import PropTypes from 'prop-types';
import NickChanger from '../NickChanger';
import AddReviewForm from '../AddReviewForm';
import ReviewDeleter from '../ReviewDeleter';
import Style from './ModalContainerStyle';

const ModalContainerView = ({ 
  isOpenNicknameChanger,
  isAddReviewFormOpen,
  isDeleteReviewModalOpen,
}) => {
  const switchingModal = () => {
    switch (true) {
      case isOpenNicknameChanger: {
        return (
          <NickChanger />
        );
      }

      case isAddReviewFormOpen: {
        return (
          <AddReviewForm />
        );
      }

      case isDeleteReviewModalOpen: {
        return (
          <ReviewDeleter />
        );
      }
    
      default: {
        return null;
      }
    }
  };

  return (
    <Style.ModalContainerWrapper>
      { switchingModal() }
    </Style.ModalContainerWrapper>
  );
};

ModalContainerView.propTypes = {
  isOpenNicknameChanger: PropTypes.bool,
  isAddReviewFormOpen: PropTypes.bool,
  isDeleteReviewModalOpen: PropTypes.boll,
};

export default ModalContainerView;