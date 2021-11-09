import React, { useState } from "react"
import { useHistory } from "react-router-dom";

function Next() {
    const [travel, setTravel] =useState("")
    const [location, setLoaction] = useState("")
    const [belongings, setbelongings] = useState("")
    const [note, setNote] = useState("")
    const [method, setMethod] = useState("")
    const [starts, setStarts] = useState("")
    const [ends, setEnds] = useState("")

    let history = useHistory()

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
                method,
                starts,
                ends

            }),
        }).then((r) => {
            if (r.ok) {
                r.json()
                .then((data) => setTravel([...travel, data]));
                history.push('/v-planner')

            }
            

        });
    }

    return (
        <div className="next">

            <form onSubmit={handleSubmit}>

                We are leaving on:
                <input
                    type="text"
                    value={starts}
                    onChange={(e) => setStarts(e.target.value)}
                />

                Coming back on:
                <input
                    type="text"
                    value={ends}
                    onChange={(e) => setEnds(e.target.value)}
                />

                <br />
                Location:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLoaction(e.target.value)}
                />

                <h3>We are taking</h3>
                <select
                    className="select-design"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                >

                    <option value="Car">Car</option>
                    <option value="Bus">Bus</option>
                    <option value="Airplane">Airplane</option>
                    <option value="Train">Train</option>
                </select>


                Belongings
                <input
                    type="text"
                    value={belongings}
                    onChange={(e) => setbelongings(e.target.value)}
                />
                <br />

                Note
                <br />

                <textarea
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />

                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}
export default Next