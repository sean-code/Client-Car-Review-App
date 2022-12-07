import React from "react";
import { useState } from "react";

function AddCar({ onAddCar }){
    const [make, setMake] = useState(" ");
    const [model, setModel] = useState(" ");
    const [fuelType, setFuelType] = useState(" ");
    const [transmission, setTransmission] = useState(" ");
    const [mileage, setMileage] = useState(" ");
    const [engineSize, setEngineSize] = useState(" ");
    const [year, setYear] = useState(" ");
    const [image, setImage] = useState(" ");


  function handleSubmit(event) {
    event.preventDefault();
    const car = {
      make,
      model,
      fuelType,
      transmission,
      mileage,
      engineSize,
      year,
      image,
    };

    fetch("/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
      })
      .then((response) => response.json())
      .then((newCar) => {
        onAddCar(newCar);
        setMake("");
        setModel("");
        setFuelType("");
        setTransmission("");
        setMileage("");
        setEngineSize("");
        setYear("");
        setImage("");
      });
}

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Add New Car</h1>
                <input 
                    type="text"
                    name="make"
                    placeholder="Make......."
                    
                />

                <input   
                    type="text"
                    name="model"
                    placeholder="Model....."
                />
                
                <input   
                    type="text"
                    name="fuel_type"
                    placeholder="Fuel Type....."
                />

                <input   
                    type="text"
                    name="transmission"
                    placeholder="Transmission......"
                />

                <input   
                    type="text"
                    name="mileage"
                    placeholder="Mileage......."
                />

                <input   
                    type="text"
                    name="engine_size"
                    placeholder="Engine Size.....(in CC)"
                />

                <input   
                    type="text"
                    name="year_of_manufacture"
                    placeholder="Year of Manufacture......."
                />

                <input   
                    type="text"
                    name="image"
                    placeholder="Image URL......"
                />
                <button type="submit">Add Car</button>
            </form>
        </>
    )
}

export default AddCar;