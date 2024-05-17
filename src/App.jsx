import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';
import Signup from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Navbar from './Navbar';
 import "./App.css";
 import {auth} from "./firebase/config";
function App() {
 const [user,setUser]=useState(null)
 
 console.log(user)
 
 useEffect(()=>{
let unsub=  auth.onAuthStateChanged((user)=>{
    console.log("authentication",user)
    setUser(user)
    unsub()
  })
    // console.log("user",auth)
  
 })
  return (
    <Router>
        <Navbar user={user}/>     
            <Routes>                                                                      
               <Route path="/" element={user?<Home user={user}/>:<Navigate to="/login"/> }/>
               <Route path="/signup" element={user?<Navigate to="/"/>:<Signup setUser={setUser} />}/>
               <Route path="/login" element={user?<Navigate to="/"/>:<SignIn setUser={setUser}/>}/>
            </Routes>                    
    </Router>
  );
}
 
export default App;