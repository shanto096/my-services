import React, { useContext } from 'react';
import { Context } from './ContextProvider';
import { useNavigate } from 'react-router-dom';

const PrivateComponent = ({children}) => {
     const {user}=useContext(Context)
     const navigate = useNavigate()
   if (user) {
    return children;
   }
   return navigate ('/login')
};

export default PrivateComponent;