import "../App.css";
import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {




  return (
    <div className="nav-container">

      <nav>

        <NavLink className='margin' to='/v-planner'>

          Home

        </NavLink>
        <NavLink className='margin' to='/v-planner/calendar'>
          Calendar
        </NavLink>




      </nav>

      <div>
        <NavLink to='/v-planner/next'>
          <a className='marginNext'>
            Make Your Future Vacation
          </a>
        </NavLink>
      </div>
    </div>
  );

}

export default NavBar;

