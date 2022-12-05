import React from "react";
import {NavLink} from 'react-router-dom';


function NavBar(){
    return(
        <>
            CAR REVIEWS
            <div>
                <div>
                    <NavLink to='/'>HOME</NavLink>
                </div>
                <NavLink to='/signup'>SIGN UP</NavLink>
                <NavLink to='/login'>LOG IN</NavLink>
                <NavLink to='/categories'>CATEGORIES</NavLink>                    <NavLink to='/addcar'>ADD CAR </NavLink>
            </div>
        </>
    )
}

export default NavBar; 