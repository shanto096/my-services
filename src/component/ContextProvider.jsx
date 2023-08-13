import React from 'react';
import { createContext } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase.config';


 const auth = getAuth(app);
export const Context = createContext(null)

const ContextProvider =  ({ children }) => {
   

    const name ={name:'shanto'}

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

  
    const value = {
    //   state,
    //   setState,
    name,
    createRegister,
    login,
    createLogOut
    }
    
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

export default ContextProvider;