import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';
import Signup from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Navbar from './Navbar';
 import "./App.css";
 import {auth} from "./firebase/config";
function App() {
 const [userAuth,setUserAuth]=useState({authIsReady:false,user:null})
//  let {user:userAuth.user,authIsReady}=user
//  console.log(user)
 
 useEffect(()=>{
let unsub=  auth.onAuthStateChanged((user)=>{
    console.log("authentication",user)

    setUserAuth({authIsReady:true,user:user})
    unsub()
  })
    // console.log("user",auth)
  
 },[])
  return (
    <Router>
      {userAuth.authIsReady&&  
      <>
      <Navbar user={userAuth} setUser={setUserAuth}/>     
            <Routes>                                                                      
               <Route path="/" element={userAuth.user?<Home user={userAuth}/>:<Navigate replace={true} to="/login"/> }/>
               <Route path="/signup" element={userAuth.user?<Navigate replace={true} to="/"/>:<Signup setUser={setUserAuth} />}/>
               <Route path="/login" element={userAuth.user?<Navigate replace={true} to="/"/>:<SignIn setUser={setUserAuth}/>}/>
            </Routes>    
      </>
            
            }                
    </Router>
  );
}
 
export default App;