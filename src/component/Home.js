import React, { useState, useEffect } from 'react';
import Schedule from './Schedule';



function Home(){

   
    const [travel, setTravel] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/travels")
            .then(r => r.json())
            .then(setTravel)
        }, [])

    function deleteTravels(id) {
        const deleteTravel = travel.filter(travel => travel.id !== id)
        setTravel(deleteTravel)
    }




    return(
        <div className="backgroundPic">
            <h3> .</h3>
            <h1 className="title">Shawn ♡ Barbies Planner</h1>

            {travel.map((data) => {
                
                return (
                    <div key={travel.id}>
                    <Schedule 
                    travel={data}
                    data={data.location}
                    location={data.location}
                    belongings={data.belongings}
                    note={data.note}
                    method={data.method}

                    deleteTravels={deleteTravels}

                    
                    />
                    </div>
                    
                )}
                
            )}
            

 
        </div>
    )
}

export default Home