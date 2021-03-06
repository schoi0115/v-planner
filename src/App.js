import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


import Home from "./component/Home"
import Next from "./component/Next"
import Calendar1 from './component/Calendar1';
import NavBar from './component/NavBar';
import Album from './component/Album'

function App() {
  const [travel, setTravel] = useState("")


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
            <Route exact path="/v-planner/next" >
              <Next
                travel={travel}
                setTravel={setTravel}
              />
            </Route>
            <Route exact path="/v-planner/calendar"
            >
              <Calendar1
                travel={travel}
                setTravel={setTravel}
              />
            </Route>
            <Route exact path="/v-planner/album"
            >
              <Album

              />
            </Route>


          </Switch>
        </main>

      </div>



    </div>
  );
}

export default App;
