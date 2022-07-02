import React from "react";
import { useEffect,useState } from "react";
import {auth}from "./firebase"
import Login from "./Autentication/LoginPage/LoginPage";
import MyRoutes from '../src/MyRoutes/MyRoutes';
import Form from "./Autentication/SignUpPage/SignUpPage";
import { Routes,Route } from "react-router-dom";
import Signup from "./Autentication/SignUpPage/SignUpPage"




const App = () => {
  
const[presenrUser,setPresentUser]=useState(false);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
      setPresentUser({
        udi:user.udi,
        email:user.email
      })
    }
    else{
      setPresentUser(false);
    }
    })
  
  },[])
  
  return (
    <div >
      
      {presenrUser? <MyRoutes />:<Login/>}
      
    </div>
  );
};

export default App;
