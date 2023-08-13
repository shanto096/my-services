import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './ContextProvider';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  

    const {createRegister} = useContext(Context)

  
    const handleRegister = (e) => {
        e.preventDefault();
        e.target.reset();
      createRegister(email,password)
      .then(res =>{
        const createUser = res.user;
        console.log(createUser);
      })
      .catch(error =>{
        console.log(error);
      })

     
   
      
      // Add your registration logic here
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#031B1C]">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center border-b-[2px] border-[#031B1C]  pb-1">Register</h2>
          <form onSubmit={handleRegister}>
              <div className='mb-2'>
                <label className="block text-sm font-medium text-gray-600"> Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border focus:ring focus:ring-blue-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
             
            <div className="mb-4">
              <label className=" block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-md border focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md border focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mb-4'>
                <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 rounded-md border focus:ring focus:ring-blue-300"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
            <p className='text-sm my-4 text-center'>Do have an account? <span className='text-sky-600'><Link to='/login'>Login Now</Link></span></p>
          </form>
        </div>
      </div>
    );
  };
export default Register;