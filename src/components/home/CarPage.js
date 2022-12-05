import React from "react";
import { useState, useEffect } from "react";

function CarPage(){
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        fetch("/cars")
        .then((response) => response.json())
        .then((carsArray) =>{
            setCars(carsArray)
        })
    }, []);

    return(
        <main>
            

        </main>
    )
}

export default CarPage;