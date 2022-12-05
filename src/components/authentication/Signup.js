import React from "react";
import "./Authentication.css"

function SignUp(){
    return(
        <div>
            <form>
                <h1>Signup</h1>
                <input type="text" id="username" placeholder="Username"/>
                <input type="password" id="username" placeholder="Password" />
                <input type="password" id="password_confirmation" placeholder="Confirm Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUp;