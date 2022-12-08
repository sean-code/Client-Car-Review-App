import React from "react";
import { useState } from "react";
import "./AddCar.css"

function AddCar({ onAddCar }){
    const [make, setMake] = useState(" ");
    const [model, setModel] = useState(" ");
    const [price, setPrice] = useState(" ");
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
      price,
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
        setMake(" ");
        setModel(" ");
        setPrice(" ");
        setFuelType(" ");
        setTransmission(" ");
        setMileage(" ");
        setEngineSize(" ");
        setYear(" ");
        setImage(" ");
      });
}

    return(
            <div className="new_car_form">
                <form onSubmit={handleSubmit}>
                    <h1>Add New Car</h1>

                    <input 
                        type="text"
                        id="make"
                        placeholder="Make" 
                        value={ make } 
                        onChange={(event) => setMake(event.target.value)}
                    />
                    <label htmlFor="search">Make:</label>
                    <input   
                        type="text"
                        placeholder="Model....."
                        value={model} 
                        onChange={(event) => setModel(event.target.value)}
                    />
                    <label htmlFor="search">Model:</label>

                    <input   
                        type="integer"
                        name="price"
                        placeholder="Price....."
                        value={price} 
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <label htmlFor="search">Price:</label>

                    
                    <input   
                        type="text"
                        name="fuel_type"
                        placeholder="Fuel Type....."
                        value={fuelType} 
                        onChange={(event) => setFuelType(event.target.value)}
                    />
                    <label htmlFor="search">Fuel-type:</label>

                    <input   
                        type="text"
                        name="transmission"
                        placeholder="Transmission......"
                        value={transmission}
                        onChange={(event) => setTransmission(event.target.value)}
                    />
                    <label htmlFor="search">Transmission:</label>

                    <input   
                        type="integer"
                        name="mileage"
                        placeholder="Mileage......."
                        value={mileage}
                        onChange={(event) => setMileage(event.target.value)}
                    />
                    <label htmlFor="search">Mileage:</label>

                    <input   
                        type="integer"
                        name="engine_size"
                        placeholder="Engine Size.....(in CC)"
                        value={engineSize}
                        onChange={(event) => setEngineSize(event.target.value)}
                    />
                    <label htmlFor="search">Engine Size:</label>

                    <input   
                        type="text"
                        name="year_of_manufacture"
                        placeholder="Year of Manufacture......."
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                    />
                    <label htmlFor="search">Year of Manufacture:</label>

                    <input   
                        type="text"
                        name="image"
                        placeholder="Image URL......"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                    <label htmlFor="search">Image URL</label>
                    <button type="submit">Add Car</button>
                </form>
            </div>
    )
}

export default AddCar;