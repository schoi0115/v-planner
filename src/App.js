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
      
      <div className="bgcolor">
      
      <NavBar />
      <main>
        <Switch >
          <Route exact path="/v-planner" >
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
        </main>
    
    </div>
      


    </div>
  );
}

export default App;
