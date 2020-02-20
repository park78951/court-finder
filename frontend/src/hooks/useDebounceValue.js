import { useState, useEffect } from 'react';

export default (value, delay) => {
  const [debounceValue, setDebounceValue] = useState('');
  
  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(debounceHandler);
  }, [value]);
  
  return debounceValue;
};