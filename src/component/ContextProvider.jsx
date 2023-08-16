import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase.config';




 const auth = getAuth(app);
export const Context = createContext(null)
const ContextProvider =  ({ children }) => {

    const [user, setUser ]= useState('')
    const [data, setData ]= useState('')


  //  register create 
    const createRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login create
     const login =(email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
     }

    //  logout create
   
   const createLogOut =()=>{
    return signOut(auth)
   }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser)
    });
    return ()=>{
        unSubscribe()
    }

   },[]);

   useEffect(()=>{
    fetch("http://localhost:5000/services")
    .then((res) => res.json())
    .then((data) => setData(data))
   })

  
    const value = {
    //   state,
    //   setState,
    user,
    createRegister,
    login,
    createLogOut,
    data
    }
    
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

export default ContextProvider;