import { useEffect, useState } from 'react';
import { apiForLocal, apiForServer } from '@apis';
import { checkValidString } from '@myUtils';
import { apiRoutes } from '@config';

const apiAxios = process.env.NODE_ENV === 'development'
  ? apiForLocal
  : apiForServer;

const useNicknameChecker = (nickname) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isValidString = checkValidString(nickname, 40);
    if(isValidString) {
      try {
        apiAxios.get(
          encodeURI(`${apiRoutes.AUTH_VALIDATION_NICKNAME}/${nickname}`), 
          {withCredentials: true}
        )
          .then(({ data }) => data)
          .then(({ isConflict }) => setIsValid(!isConflict));
      } catch (err) {
        console.error(err);
      }
    } else {
      setIsValid(false);
    }
  }, [nickname]);

  return { isValid };
};

export default useNicknameChecker;