import './App.css';
import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


import Planner from "./component/Planner"
import Next from "./component/Next"
import Calendar1 from './component/Calendar1';

function App() {
  

  return (
    <div>
      <Planner />
      <Calendar1 />
      <Next />


    </div>
  );
}

export default App;
