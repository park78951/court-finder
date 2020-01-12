import React, { useState, useMemo } from 'react';
import BasicForm from './BasicForm';
import AdditionalForm from './AdditionalForm';
import SummaryForm from './SummaryForm';
import { useSelector, useDispatch } from 'react-redux';
import { closeCourtAddtionForm, addCourts } from '../../actions';
import { buttonTheme, cancelBtnSizeOfAddForm } from '../../config/initConfig';
import { MdCancel } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import Styles from './CourtAdditionStyle';

const CourtAddition = () => {
  const [curPage, setcurPage] = useState(1);
  const { size } = cancelBtnSizeOfAddForm;
  const dispatch = useDispatch();
  const { 
    courtAdditionFlag,
    addedInfo
  } = useSelector(state => ({
    courtAdditionFlag: state.storeOnFlag.courtAdditionFlag,
    addedInfo: state.storeOnAddition.addedInfo
  }));

  const closeModal = e => {
    e.preventDefault();
    dispatch(closeCourtAddtionForm());
  };

  const submitHandler = e => {
    e.preventDefault();
  };

  const moveNext = () => {
    setcurPage(curPage + 1);
  };

  const movePrev = () => {
    setcurPage(curPage - 1);
  };

  const submitCourtsInfo = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const modalRenderer = useMemo(() => {
    switch (curPage) {
      case 1: 
        return (
          <BasicForm 
            moveNext={ moveNext }
            dispatch={ dispatch }
            addCourts={ addCourts }
          />
        );
      case 2:
        return (
          <AdditionalForm 
            moveNext={ moveNext }
            movePrev={ movePrev }
            dispatch={ dispatch }
            addCourts={ addCourts }
          />
        );
      case 3:
        return (
          <SummaryForm 
            submitHandler={ submitHandler }
            movePrev={ movePrev }
            addedInfo={ addedInfo }
          />
        );

      default:
        break;
    }
  }, [curPage]);

  return (
    <ThemeProvider theme={ buttonTheme }>
      <Styles.AdditionFormWrapper 
        isOpen={ courtAdditionFlag }
        onSubmit={ submitCourtsInfo }
      >
        <button onClick={ closeModal }>
          <MdCancel size={ size } />
        </button>
        <h1>장소추가</h1>
        <form>
          { modalRenderer }
        </form>
      </Styles.AdditionFormWrapper>
    </ThemeProvider>
  );
};

export default CourtAddition;