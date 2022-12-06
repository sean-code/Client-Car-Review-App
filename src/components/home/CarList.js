import React from "react";
import CarCard from "./CarCard";

function CarList(){
    return(
        <>
            <ul className="card">
                {cars.map((car) => {
                    return <CarCard key={car.id} car={car} />
                })}
            </ul>
        </>
    );
}

export default CarList;