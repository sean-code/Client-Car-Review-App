import React, { useState } from "react";
import './Authentication.css'


function Login({ setUser }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit({event}) {
        event.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => {
          if(response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
    }
    
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
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
                    <button type="submit">Log In</button>
                </form>
            </div>

        </div>
    )
}

export default Login;




