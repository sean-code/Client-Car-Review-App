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
            <form>
                <h1>Add New Car</h1>
                <input 
                    type="text"
                    name="name"
                    placeholder="Make......."
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Model....."
                />
                
                <input   
                    type="text"
                    name="name"
                    placeholder="Fuel Type....."
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Transmission......"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Mileage......."
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Engine Size.....(in CC)"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Year of Manufacture......."
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Image URL......"
                />
                <button type="submit">Add Car</button>
            </form>
        </>
    )
}

export default AddCar;