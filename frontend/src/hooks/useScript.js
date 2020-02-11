import { useState, useEffect } from 'react';
import loadScript from 'scriptjs'

const useScript = ({ url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadScript(url, () => setIsLoaded(true));
  }, []);

  return isLoaded;
};

export default useScript;