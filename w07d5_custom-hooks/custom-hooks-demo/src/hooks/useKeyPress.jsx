import { useEffect, useState } from 'react';

const useKeyPress = (targetKey) => {

  const [isKeyPressed,setKeyPressed] = useState(false);

  useEffect(() => {

    const downHandler = (event) => {
      if (event.key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = (event) => {
      if (event.key === targetKey) {
        setKeyPressed(false);
      }
    }

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };

  });

  return isKeyPressed;
};

export default useKeyPress;