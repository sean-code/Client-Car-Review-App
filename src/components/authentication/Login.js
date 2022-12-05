import React from "react";
import './Authentication.css'


function Login(){
    return(
        <div>
            <div>
            <form>
                <h1>Login</h1>
                <input type="text" id="username" placeholder="Username"/>
                <input type="password" id="username" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>

        </div>
    )
}

export default Login;