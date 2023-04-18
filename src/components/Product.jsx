import React, { useContext } from 'react';

import { ProductContext } from './Main';

const Product = ({ product}) => {
      const { name, img, price, seller, ratings, category,id } = product;
      const {handleCart}= useContext(ProductContext)
      
      return (
            <div className='flex flex-col border rounded-md shadow-md'>
                  <img src={img&& img} alt={category} />
                  <div className=' mt-2 p-4'>
                        <h2 className='heading'>{name}</h2>
                        <p>Price : ${price}</p>
                        <div className='my-4'>
                              <p>Manufacturer : {seller}</p>
                              <p>Ratings : {ratings} star</p>
                        </div>
                  </div>
                  <button onClick={()=>handleCart(product)} className='btn btn-primary mt-auto'>Add to Cart</button>




            </div>
      );
};

export default Product;