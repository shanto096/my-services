import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from './ContextProvider';

const Login = () =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const {user,login} = useContext(Context)
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (user) {
        login(email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      }
      else{
        navigate('/register')
      }
      
    

      // Add your login logic here
    };

  
    return (
      <div  className="flex items-center justify-center min-h-screen bg-[#031B1C]">
        <div  className="bg-white px-10 py-8 shadow-md rounded-md w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center border-b-[2px] border-[#031B1C]  pb-1 ">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium  text-gray-600">Email</label>
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            <p className='text-sm my-4 text-center'>Don't have an account? <span className='text-sky-600'><Link to='/register'>Register Now</Link></span></p>
          </form>
        </div>
      </div>
    );
  };
  

export default Login;