import React from "react";
import "./Signup.css"

function SignUp(){
    return(
        <div>
            <form>
                <h1>Signup</h1>
                <input type="text" id="username" />
                <input type="password" id="username" />
                <input type="password" id="password_confirmation" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUp;