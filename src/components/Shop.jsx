import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import { ProductContext } from './Main';
import Cart from './Cart';

const Shop = () => {
      const { products,handleShowAll,clip } = useContext(ProductContext);
      // const products = useLoaderData()
      return (
            <div className=' container px-8 sm:px-0   shop my-10 relative'>
                  <div className=' flex flex-col gap-12 justify-center items-center'>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
                              {
                                    products.map(product => <Product
                                          key={product.id}
                                          product={product}

                                    />)
                              }
                        </div>
                        <button onClick={handleShowAll} className={`btn btn-accent hover:bg-amber-300 text-white hover:text-gray-950 w-1/3 ${clip === false ? 'hidden':'block'}`}>Show All</button>
                  </div>
                  <div className=' bg-[#FFE0B3] rounded-md' >
                        <Cart />

                  </div>

            </div>
      );
};

export default Shop;