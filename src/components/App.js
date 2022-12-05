import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar';
import Home from './home/Home';
import SignUp from './authentication/Signup';
import Login from './authentication/Login';

function App() {
  return (

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={
            <Home />
          }/>
          <Route path="/signup" element={
            <SignUp />
          }/>
          <Route path="/login" element={
            <Login />
          }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
