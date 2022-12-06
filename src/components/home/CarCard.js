import React from "react";

function CarCard({car}){
    const {id, price, make, model, fuel_type, transmission, mileage, engine_size, year, image} = car;
    return(
        <li className="card">
            <img src={image} alt={model} />
            <h5>{id}</h5>
            <h4>Make: {make}, {model}</h4>
            <p>Price: {price}</p>
            <p>Fuel-type: {fuel_type}</p>
            <p>Transmission: {transmission}</p>
            <p>Mileage: {mileage}</p>
            <p>Engine-size: {engine_size}</p>
            <p>Year: {year}</p>
        </li>
    )

}

export default CarCard;

