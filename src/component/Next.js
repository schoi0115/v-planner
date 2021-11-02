import React, { useState } from "react"

function Next({travel, setTravel}){
    const [location, setLoaction] = useState("")
    const [belongings, setbelongings] = useState("")
    const [note, setNote] = useState("")
    const [method, setMethod] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
          fetch("http://localhost:8000/travels", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              location,
              belongings,
              note,
              method

            }),
          }).then((r) => {
            if (r.ok) {
              r.json()
              .then((data) => setTravel([...travel, data]));
            }
          });
      }

    return(
    <div className="next">
        <form onSubmit={handleSubmit} className="formSubmit">
       
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLoaction(e.target.value)}
            />
            <br />
    
                Belongings
            <input
              type="text"
              value={belongings}
              onChange={(e) => setbelongings(e.target.value)}
            />
            <br />
     
                Note:
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <br />
            <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
            >

                <option value="1">Car</option>
                <option value="2">Bus</option>
                <option value="3">Air Plain</option>
                <option value="3">Train</option>
            </select>
            <br />
         
            <input className="submitBtn" type="submit" value="Submit" />
        </form>

    </div>
    )
}
export default Next