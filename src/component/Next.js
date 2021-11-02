import React, { useState } from "react"

function Next({location, setLocation}){
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
          fetch("http://localhost:8000/travels", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json()
              .then((data) => setLocation([...location, data]));
            }
          });
      }

    return(
    <div className="next">
        <form onSubmit={handleSubmit} className="formSubmit">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </label>
            <input className="submitBtn" type="submit" value="Submit" />
        </form>

    </div>
    )
}
export default Next