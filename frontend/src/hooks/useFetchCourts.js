import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { requestCourt } from '@actions';

const useCourtFetch = () => {
  const { selectedCourt } = useSelector(({ courts }) => courts);
  const dispatch = useDispatch();
  const { route, query } = useRouter();
  
  useEffect(() => {
    const { id } = query;
    if(route.startsWith('/search') && searchedCourts) {
      dispatch(requestCourt(id));
    }
  }, []);
  
  return { selectedCourt };
};

export default useCourtFetch;