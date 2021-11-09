import React, { useState, Link } from "react"
import Album from './Album'

function Schedule({ location, note, belongings, method, travel, deleteTravels, editTravels }) {

    const [updateLocation, setUpdatelocation] = useState("")
    const [edit, setEdit] = useState(false)

    function handleDeleteClick() {
        fetch(`http://localhost:8000/travels/${travel.id}`, {
            method: "DELETE",
        });
        deleteTravels(travel.id);
    }

    
    function editArrayBtn() {
        fetch(`http://localhost:8000/travels`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                location: updateLocation,
            }),
        })
            .then((r) => r.json())
            .then((data) => editTravels(data))
    }

    function editBtn() {
        setEdit(!edit)
    }

    return (
        <div>
            <h1>
                We are going {location}.
                <br />
                Please do not forget {belongings}
                <br />
                We are traveling with {method}
                <br />
                {note}
                <br />
            </h1>
            <button onClick={handleDeleteClick}>
                Delete
            </button>
            <button>
                <Link>
                <Album />
                </Link>
            </button>

            <button onClick={editBtn}>
                {!edit ? "Edit" : "Close"}
            </button>
            {edit ? (
                <div>
                    <form onSubmit={editArrayBtn}>
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            value={updateLocation}
                            onChange={(e) => setUpdatelocation(e.target.value)} />
                        <button type="submit">Save</button>
                    </form>
                </div>

            ) : (
                null

            )}

        </div>

    )
}

export default Schedule