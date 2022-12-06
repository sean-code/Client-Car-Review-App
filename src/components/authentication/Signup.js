import React from "react";
import "./Authentication.css";
import {useState, useEffect} from 'react';

function SignUp(){
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");

    return(
        <div>
            <form>
                <h1>Signup</h1>
                <input type="text" id="username" placeholder="Username"/>
                <input type="password" id="password" placeholder="Password" />
                <input type="password" id="password_confirmation" placeholder="Confirm Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUp;