import React from "react";
import Search from "./Search";
import CarPage from "./CarPage";

function Home(){
    return(
            <>
                <h1>Kindly First Log In or Sign Up</h1>
                <div>
                    <Search />
                    <CarPage />
                </div>
            </>
    )
}

export default Home;