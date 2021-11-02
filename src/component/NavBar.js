import "../App.css";

import React from "react";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";



function NavBar() {




    return (
      <div className="nav-container">

        <nav>
        
                <NavLink className='margin' to='/'>

                Home 
          
                </NavLink> 
                <NavLink className='margin' to='/calendar'>
                Calendar 
                </NavLink>



  
        </nav>

        <div>
            <NavLink  to='/next'>
                <a className='marginNext'>
                Next 
                </a>
            </NavLink>
        </div>
      </div>
    );
 
}

export default NavBar;

