import React from 'react';
import useKeyPress from '../hooks/useKeyPress';

const KeyPress = () => {

  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');

  return (
    <div>
      { happyPress && <h1>Happy</h1> }
      { sadPress && <h1>Sad</h1> }
    </div>
  );
};

export default KeyPress;