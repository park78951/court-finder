import React, { useContext, useState, useMemo } from 'react';
import { CourtContext } from '../../courtStore/CourtStore';
import { buttonTheme } from '../../config';
import { CLOSE_COURTADDITION } from '../../config/constants';
import { ThemeProvider } from 'styled-components';
import { MdCancel } from 'react-icons/md';
import BasicForm from './BasicForm';
import AdditionalForm from './AdditionalForm';
import SummaryForm from './SummaryForm';
import Styles from './indexStyle';
import PropTypes from 'prop-types';

const CourtAddition = () => {
  const { 
    courtAdditionFlag, 
    uiToggleDispatch,
    courtsDispatch,
    addedInfo
  } = useContext(CourtContext);
  
  const [curPage, setcurPage] = useState(1);

  const closeModal = e => {
    e.preventDefault();
    uiToggleDispatch({ type: CLOSE_COURTADDITION });
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
            courtsDispatch={ courtsDispatch }
          />
        );
      case 2:
        return (
          <AdditionalForm 
            moveNext={ moveNext }
            movePrev={ movePrev }
            courtsDispatch={ courtsDispatch }
          />
        );
      case 3:
        return (
          <SummaryForm 
            submitHandler={ submitHandler }
            movePrev={ movePrev }
            courtAdditionFlag={ courtAdditionFlag }
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
          <MdCancel size={ 40 } />
        </button>
        <h1>장소추가</h1>
        <form>
          { modalRenderer }
        </form>
      </Styles.AdditionFormWrapper>
    </ThemeProvider>
  );
};

CourtAddition.propTypes = {
  courtAdditionFlag: PropTypes.bool,
  uiToggleDispatch: PropTypes.func,
  courtsDispatch: PropTypes.func,
  addedInfo: PropTypes.object
};

export default CourtAddition;