
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';


import { Context } from '../component/ContextProvider';
import { useContext } from 'react';

const Nav = () => {
    const {user,createLogOut} = useContext(Context)
    const logout = ()=>{
        createLogOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
        <div className='bg-[#031B1C] py-5 text-white flex justify-between px-36 border-b-[0.5px] border-gradient-to  from-[#d80909] via-[#d51864] to-[#f11c0d] '>
            <div>
            
           <ActiveLink to = '/'>Home</ActiveLink> 
            <ActiveLink  to='/product'> <span className='mx-5'>Product</span> </ActiveLink>
            <ActiveLink to='/about'>About</ActiveLink>
            </div>
            <div>
            <h1>{user?.email}</h1>
            </div>
            <div>{
                user?.email? <Link><button className='mx-5'onClick={logout} >LogOut</button></Link> :<><Link to='/login'><button className='border-[1px] border-gray-50 px-2 rounded mr-4'>Login</button></Link>
                
                <Link to='/register'><button >Register</button></Link></>
                
                }
                
            </div>
            
        </div>
    );
};

export default Nav;