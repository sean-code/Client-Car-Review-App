import React from "react";
import "./Home.css"

function CarCard({ car, onDeleteCar}){
    const {id, price, make, model, fuel_type, transmission, mileage, engine_size, year, image } = car;


    function handleDeleteClick() {
        fetch(`/cars/${id}`, {
          method: "DELETE",
        }).then((response) => {
          if (response.ok) {
            onDeleteCar(id);
          }
        });
      }
    
    return(
            <li className="card">
                <div className="card_components">
                    <img src={image} alt={model} />
                    <div className="details">
                        <p><strong>{make}, {model}</strong></p>
                        <p>
                            <strong>Price: </strong>US ${price}
                        </p>
                        <p>
                            <strong>Fuel-Type:</strong>{fuel_type}
                        </p>
                        <p>
                            <strong>Transmission:</strong>{transmission}
                        </p>
                        <p>
                            <strong>Mileage:</strong>{mileage}
                        </p>
                        <p>
                            <strong>Engine-Size:</strong> {engine_size}
                        </p>
                        <p>
                            <strong>Year:</strong>{year}
                        </p>
                        <button onClick={handleDeleteClick}> Remove</button>
                    </div>
                </div>
        </li>
    )

}

export default CarCard;
