import React from 'react';
import img from '../img/Screenshot 2023-08-11 181931.png'

const Home = () => {
    return (
        <div className='h-[92vh] bg-[#031B1C] grid grid-cols-2 gap-32'>
            <div className="my-[10rem] ml-32">
                <h1 className='text-white text-5xl'>Intrust is Short <br /> Links, Big Results</h1>
                <p className='text-white my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugiat, voluptate.</p>
                <div>
                <button className='bg-teal-200 py-2 px-7 mr-4 rounded '>Get Started</button>
                    <button className='border-[1px] border-white py-2 px-7 mr-4 rounded text-white'>Get a Quote</button>
                </div>
            </div>
            <div className='' >
                <img className='h-5/6 mt-10' src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;