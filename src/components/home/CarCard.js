import React from "react";
import "./Home.css"

function CarCard({ car, onDeleteCar}){
    const { id, price, make, model, fuel_type, transmission, mileage, engine_size, year, image } = car;


    function handleDeleteClick() {
        fetch(`/cars/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteCar(id);
          }
        });
      }


    
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
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    )

}

export default CarCard;


//Add button for rendering the reviews of a given car