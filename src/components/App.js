import React, {useState, useEffect} from "react";
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar';
import Home from './home/Home';
import SignUp from './authentication/Signup';
import Login from './authentication/Login';
import AddCar from './addcar/AddCar';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // For the auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) 
  return <Login onLogin={setUser} />
          
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={
            <Home />
          }/>
          <Route path="/signup" element={
            <SignUp />
          }/>
          <Route path="/login" element={
            <Login />
          }/>
          <Route path="/addcar" element={
            <AddCar />
            }/>
        </Routes>
      </Router>
  )
}

export default App;
