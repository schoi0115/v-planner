import React, { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import Next from "./Next"
import { Link, NavLink } from "react-router-dom";

function Calendar1(){
    const [date, setDate] = useState(new Date());

    function moveToNext(){
        return (
 <h1>
     is this a thing?
     </h1>
        )
    }


    return(
        <div className='calendar'>
            <div className='calendar-container'>
            <Calendar
                className='calendar-body'
                onChange={setDate}
                value={date}
                selectRange={true}

                nextLabel='month>'
                nextAriaLabel='Go to next month'
                next2Label='year>'
                next2AriaLabel='Go to next year'
                prevLabel='<month'
                prevAriaLabel='Go to prev month'
                prev2Label='<year'
                prev2AriaLabel='Go to prev year'
            />
            </div>
            {date.length > 0 ? (
            <p className="calendar-select-dates">
                <span>Start: </span>
                {date[0].toDateString()}
                
                <span> ~ End:</span> {date[1].toDateString()}
                <br />
                <NavLink to="/next" className="add-event-btn">Add Event</NavLink>
            </p>
            ) : (
            <p>
                <span className="calendar-select-dates-defualt">Selected Date: {date.toDateString()}</span>
                
                
            </p>
            
            )}
      </div>
    );
  }
  
export default Calendar1