import React from "react";
import "./Authentication.css";
import {useState} from 'react';

function SignUp({ setUser }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        fetch(`/users`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            }),
        }).then((response) => {
            if(response.ok) {
                response.json().then((user) => setUser(user));
            }
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <input 
                type="text" 
                id="username" 
                placeholder="Username" 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />

                <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />

                <input 
                type="password" 
                id="password_confirmation" 
                placeholder="Confirm Password" 
                value={passwordConfirmation}
                onChange={(event) => setPasswordConfirmation(event.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp;