import React, { useContext } from 'react';
// import { getShoppingCart } from './utilities/fakedb';
import { ProductContext } from './Main';
import { Link } from 'react-router-dom';

const Cart = () => {
      const { cart, handleClearCart } = useContext(ProductContext)
      let item = 0;
      let totalPrice = 0;
      let shipping = 0;
      let tax=0;


      for (const product of cart) {
            totalPrice += product.quantity * product.price;
            item += product.quantity;
            shipping += product.shipping;
      }
      if(totalPrice > 200 && totalPrice<1000){
            tax=20;
      }
      else if(totalPrice> 1000)
      {
            tax=100;
      }

      const grandTotal= totalPrice + shipping + tax;


      return (
            <div className=' sticky top-16 py-10 px-4 flex flex-col gap-4'>
                  <h1 className=' heading text-center underline'>Order Summery</h1>
                  <div>
                        <p>Selected Items : {item}</p>
                        <p>Total Price : ${totalPrice}</p>
                        <p>Total Shipping charge: ${shipping}</p>
                        <p>Tax : ${tax}</p>
                        <p>Grand Total : ${grandTotal}</p>
                  </div>

                  <button onClick={handleClearCart} className=' bg-pink-600 px-4 rounded-md text-white font-semibold hover:bg-red-800 py-2'>Clear Cart</button>
                 <Link to='/review'   className=' bg-orange-400 px-4 rounded-md text-white font-semibold hover:bg-orange-800 py-2 text-center'> Review Order</Link>
            </div>
      );
};

export default Cart;