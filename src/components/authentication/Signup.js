import React from "react";
import "./Authentication.css";
import {useState} from 'react';

function SignUp(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            }),
        })
    }

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