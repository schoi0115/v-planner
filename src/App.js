import './App.css';
import React, { useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


import Home from "./component/Home"
import Next from "./component/Next"
import Calendar1 from './component/Calendar1';
import NavBar from './component/NavBar';

function App() {
  

  return (
    <div>
      <NavBar />
      <div className="bgcolor">

      
        <Switch >
          <Route exact path="/" >
            <Home 
            />
          </Route>
          <Route exact path="/next" >
            <Next 
            />
          </Route>
          <Route exact path="/calendar" >
            <Calendar1 
            />
          </Route>

   
        </Switch>
    
    </div>
      


    </div>
  );
}

export default App;
