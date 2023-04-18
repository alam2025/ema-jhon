import React, { useContext } from 'react';
import { ProductContext } from './Main';
import CartProduct from './CartProduct';
import Cart from './Cart';

const Order = () => {
      const { cart } = useContext(ProductContext)

      return (
            <div className=' container flex  px-8 md:px-10  shop mt-10 relative my-8'>
                  <div className=' grid grid-cols-1  gap-6 '>
                        {
                             cart.map(product=><CartProduct  
                             key={product.id}
                             product={product}
                             />)
                        }
                  </div>
                  <div className=' bg-[#FFE0B3] rounded-md' >
                        <Cart />

                  </div>

            </div>
      );
};

export default Order;