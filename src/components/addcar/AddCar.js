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
            <h1>Add New Car</h1>
            <form>
                <input 
                    type="text"
                    name="name"
                    placeholder="Car name"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Car name"
                />
                
                <input   
                    type="text"
                    name="name"
                    placeholder="Car name"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Car name"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Car name"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Car name"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Car name"
                />

                <input   
                    type="text"
                    name="name"
                    placeholder="Car name"
                />
            </form>
        </>
    )
}

export default AddCar;