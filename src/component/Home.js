import React, { useState, useEffect } from 'react';



function Home(){

    const API = "http://localhost:3000/home";
    console.log(API)
    const [travel, setTravel] = useState([])

    useEffect(() => {
        fetch(API)
            .then(r => r.json())
            .then(setTravel)
        }, [])
        console.log(travel)

    return(
        <div className="backgroundPic">
            <h3> .</h3>
            <h1 className="title">Shawn ♡ Barbies Planner</h1>

 
        </div>
    )
}

export default Home