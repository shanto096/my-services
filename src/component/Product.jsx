import React, { useContext } from 'react';
import { Context } from './ContextProvider';
import SingleProduct from './singleProduct';


const Product = () => {
    const {data} = useContext(Context)

    console.log(data);
    return (
        <div className='grid grid-cols-4 gap-10 bg-[#031B1C] px-10 h-[92vh] pt-10'>
            {
                data.map(pd =><SingleProduct key={pd.id} Data={pd} ></SingleProduct>)
            }
        </div>
    );
};

export default Product;