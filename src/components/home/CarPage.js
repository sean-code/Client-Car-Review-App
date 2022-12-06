import React from "react";
import { useState, useEffect } from "react";
import CarList from "./CarList";

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
            <CarList />
            

        </main>
    )
}

export default CarPage;