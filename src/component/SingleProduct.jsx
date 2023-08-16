import React from 'react';

const SingleProduct = ({Data}) => {
    const seeMore = () =>{

    }
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">Name: {Data.name}</h2>
        <p className="text-gray-700">UserName: {Data.username}</p>
        <p className="text-gray-700">Email: {Data.email}</p>
        <button onClick={seeMore} className='bg-black px-2 text-white rounded' > see more</button>
      </div>
    );
};

export default SingleProduct;