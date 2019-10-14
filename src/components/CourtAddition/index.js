import React, { useContext, useState, useMemo } from 'react';
import { CourtContext } from '../../courtStore/CourtStore';
import { buttonTheme } from '../../config';
import { CLOSE_COURTADDITION } from '../../config/constants';
// import CustomDropDown from '../lib/DropDown';
import CustomButton from '../lib/Button';
import { ThemeProvider } from 'styled-components';
import { MdCancel } from 'react-icons/md';
import { initSubmitList } from '../../courtStore/initalState';
import BasicForm from './BasicForm';
import AdditionalForm from './AdditionalForm';
import TagForm from './TagForm';
import Styles from './indexStyle';


const CourtAddition = () => {
  const { 
    courtAdditionFlag, 
    uiToggleDispatch ,
    addCourt
  } = useContext(CourtContext);
  
  const [submitList, setSubmitList] = useState(initSubmitList);

  const closeModal = evt => {
    evt.preventDefault();
    uiToggleDispatch({ type: CLOSE_COURTADDITION });
  };

  const moveNext = (formList) => {
    setSubmitList({
      ...submitList,
      curPage: submitList.curPage + 1,
      ...formList
    });
  };

  const movePrev = () => {
    setSubmitList({
      ...submitList,
      curPage: submitList.curPage - 1
    });
  };

  const submitCourtsInfo = e => {
    e.preventDefault();
    addCourt(submitList);
  };

  const modalRenderer = useMemo(() => {
    switch (submitList.curPage) {
      case 1: 
        return (
          <BasicForm 
            moveNext={ moveNext }
          />
        );
      case 2:
        return (
          <AdditionalForm 
            moveNext={ moveNext }
            movePrev={ movePrev }
          />
        );
      case 3:
        return (
          <TagForm />
        );
      default:
        break;
    }
  }, [submitList.curPage]);

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

export default CourtAddition;