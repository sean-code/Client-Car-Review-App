import './Authentication.css'
import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder='username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder='password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      
    </form>
  );
}

export default Login;



