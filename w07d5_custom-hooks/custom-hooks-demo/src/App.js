import './App.css';
import DocumentTitle from './components/DocumentTitle';
import useMousePosition from './hooks/useMousePosition';
import KeyPress from './components/KeyPress';
import Request from './components/Request';
import LoginForm from './components/LoginForm';

function App() {

  const coords = useMousePosition();

  return (
    <div className="App">
      <h2>Fun with Custom Hooks!</h2>
      <DocumentTitle/>
      <p>X: { coords.x } Y: { coords.y }</p>
      <KeyPress/>
      <Request/>
      <LoginForm/>
    </div>
  );
}

export default App;
