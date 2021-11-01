import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Planner from "./component/Planner"

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Planner />
      <Calendar
        onChange={onChange}
        value={value}
      />

    </div>
  );
}

export default App;
