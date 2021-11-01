import logo from './logo.svg';
import './App.css';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Planner from "./component/Planner"

function App() {
  return (
    <div>
      <Planner />
    </div>
  );
}

export default App;
