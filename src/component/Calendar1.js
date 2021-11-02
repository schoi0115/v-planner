import React, { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

function Calendar1(){
    const [date, setDate] = useState(new Date());


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
            <p>
                <span>Start:</span>{' '}
                {date[0].toDateString()}
                &nbsp;|&nbsp;
                <span>End:</span> {date[1].toDateString()}
            </p>
            ) : (
            <p>
                <span>Default selected date:</span>{' '}
                {date.toDateString()}
            </p>
            )}
      </div>
    );
  }
  
export default Calendar1