import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';
import Signup from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Navbar from './Navbar';
 import "./App.css";
function App() {
 

  
 

  return (
    <Router>
                      <Navbar/>     
            <Routes>                                                                      
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup />}/>
               <Route path="/login" element={<SignIn/>}/>
            </Routes>                    
    </Router>
  );
}
 
export default App;