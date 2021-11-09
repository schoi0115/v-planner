import React, { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import Next from "./Next"


function Calendar1() {
    const [date, setDate] = useState(new Date());
    const [addEvent, setAddevent] = useState(false)





    function showForm() {
        setAddevent(!addEvent)
    }




    return (
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

                    <div className="add-event-btn" onClick={showForm}>
                        {addEvent ? (
                            <div>
                        <Next />
                        </div>




                    ) : (
                        <div>

                            <Next />

                        </div>
                    )}
                    </div>
                </p>
            ) : (
                <p>
                    <span className="calendar-select-dates-defualt">Selected Date: {date.toDateString()}</span>

                </p>

            )}


            <h1>
                Select Your Vacation Date!
            </h1>


        </div>
    );
}

export default Calendar1