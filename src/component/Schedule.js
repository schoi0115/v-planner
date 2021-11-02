import React from "react"

function Schedule({location, note, belongings, method, travel, deleteTravels}){
    function handleDeleteClick() {
        fetch(`http://localhost:8000/travels/${travel.id}`, {
          method: "DELETE",
        });
        deleteTravels(travel.id);
      }


    return(
        <div>
            <h1>
       
            We are going {location}.
            Please do not forget {belongings}
            {note}
            We are traveling with {method}
         
            </h1>
            <button onClick={handleDeleteClick}>
                  Delete
            </button>

        </div>

    )
}

export default Schedule