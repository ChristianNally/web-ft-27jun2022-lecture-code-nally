import './App.css';
import { useState } from 'react';
import SideEffects from './components/sideEffects';

function App() {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      <h2>Side-Effects Demo</h2>
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      {isChecked && <SideEffects/> }
    </div>
  );
}

export default App;
