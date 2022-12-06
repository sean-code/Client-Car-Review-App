import React from "react";
import { useEffect, useState  } from "react";
import Search from "./Search";
import CarCard from "./CarCard"


function CarPage(){
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('/cars')
            .then(response => response.json())
            .then(response => setCars(response));
},[]);

// console.log(cars)


    // function handleDeleteCar(id) {
    //     const updatedCarsArray = cars.filter((car) => car.id !== id);
    //     setCars(updatedCarsArray);
    //   }

    //   const displayedCars = cars.filter((car) => {
    //     return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    //   });

    return(
        <main>
            <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <div className="cars_display">
                {cars.map((car) => ( <CarCard key={car.id} car={car} 
            /> ))} 
            </div>
            
        </main>
    )
}

export default CarPage;