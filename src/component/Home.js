import React, { useState, useEffect } from 'react';



function Home(){

   
    const [travel, setTravel] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/travels")
            .then(r => r.json())
            .then(setTravel)
        }, [])


    return(
        <div className="backgroundPic">
            <h3> .</h3>
            <h1 className="title">Shawn ♡ Barbies Planner</h1>

            {travel.map((data)=> data.location)}

 
        </div>
    )
}

export default Home