import React, { useContext } from 'react';
import { ProductContext } from './Main';

const CartProduct = ({product}) => {
      const {handleRemoveItem}= useContext(ProductContext)
      const { name, img, price, shipping,seller,quantity,id } = product;
     
      return (
            <div className='flex justify-between items-center border shadow-md p-2 rounded-md h-[110px]'>
                  <div className=' flex gap-4 justify-start items-center'>
                        <img src={img} alt= {seller} className=' w-[91px] rounded-md'/>
                        <div>
                              <h2>{name}</h2>
                              <p>Price : {price}</p>
                              <p>Shipping Charge : {shipping}</p>
                              <p>Quantity : {quantity}</p>
                        </div>
                  </div>
                  <button onClick={ ()=>handleRemoveItem(id)} className=' bg-orange-300 p-3 rounded-[50%]'>D</button>
            </div>
      );
};

export default CartProduct;