import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AiOutlineHome } from "react-icons/ai";
import InputBar from './InputBar';
import { requestCourts } from '@actions';
import { getSearchQueries } from '@myUtils';
import { useOnChange } from '@hooks';
import Style from './SearchStyle';

const Search = () => {
  const inputRef = useRef();
  const [term, onChangeTerm] = useOnChange('');
  const { filterInput } = useSelector(({ court }) => court);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const goHome = useCallback(() => {
    router.push('/');
  }, []);

  const inputSubmit = useCallback(evt => {
    evt.preventDefault();
    inputRef.current.blur();

    dispatch(requestCourts({
      userInput: term, 
      filterInput,
      page: 1,
    }));

    const searchRoute = getSearchQueries({
      userInput: term,
      city: filterInput.city,
      district: filterInput.district,
      page: 1,
    });
    router.push(`/search${searchRoute}`);
  }, [term, filterInput]);

  return (
    <Style.SearchContainer >
      <Style.homeButton onClick={goHome}>
        <AiOutlineHome size={30}/>
      </Style.homeButton>
      <InputBar
        onChangeTerm={onChangeTerm}
        inputSubmit={inputSubmit}
        term={term}
        ref={inputRef}
      />
    </Style.SearchContainer>
  );
};

export default Search;