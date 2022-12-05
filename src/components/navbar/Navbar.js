import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css'


function NavBar(){
    return(
        <>
          <div className="navbar-container">
          <div className="logo">
                <h2>CAR REVIEWS..🚗</h2>
            </div>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/signup">SIGN UP</NavLink>
                <NavLink to="/login">LOG IN</NavLink>                  
                <NavLink to='/addcar'>ADD CAR+ </NavLink>
          </div>
        </>
    )
}

export default NavBar; 

