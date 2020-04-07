import { useState, useCallback } from 'react';

const useOnChange = (value) => {
  const [state, setState] = useState(value);

  const onChangeHandler = useCallback(({ target }) => {
    setState(target.value);
  }, [state]);

  return [state, onChangeHandler];
};

export default useOnChange;