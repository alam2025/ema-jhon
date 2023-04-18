import React, { createContext, useEffect, useState } from 'react';
import Header from './Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from './utilities/fakedb';

export const ProductContext = createContext(null);

const Main = () => {
     
      const [clip, setClip]= useState(true)
      const [cart, setCart] = useState([]);
      let products = useLoaderData();

      clip === true ?products= products.slice(0,12):products



      //load product from local store


      useEffect(() => {
            const savedCart = getShoppingCart();
            let storedCart = [];
            for (const id in savedCart) {
                  const addedProduct = products.find(product => product.id === id)
                  if (addedProduct) {
                        addedProduct.quantity = savedCart[id];
                        storedCart.push(addedProduct);

                  }
            }
            setCart(storedCart)
          


      }, [])
      
      

      const handleShowAll = () => {
            setClip(false)

      }



      //      console.log(storedCart);

      const handleCart = (product) => {
            let newCat = [];

            const exists = cart.find(pd => pd.id === product.id);
            // console.log(exists);

            if (!exists) {
                  product.quantity = 1;
                  newCat = [...cart, product];
            }
            else {
                  exists.quantity += 1;
                  const remaining = cart.filter(pd => pd.id !== product.id);
                  newCat = [...remaining, exists];
            }
            setCart(newCat)
            addToDb(product.id);
      }

      const handleClearCart = () => {
            setCart([])
            deleteShoppingCart()

      }

      const handleRemoveItem = id => {
            const remainnig = cart.filter(pd => pd.id !== id);
            setCart(remainnig);
            removeFromDb(id)

      }

      const info = {
            products,
            handleCart,
            handleClearCart,
            handleRemoveItem,
            handleShowAll,
            cart,
            clip

      }

      return (
            <div  >
                  <ProductContext.Provider value={info}>
                        <Header />
                        <div className=' flex flex-col min-h-screen'>
                              <Outlet />
                              <Footer />
                        </div>
                  </ProductContext.Provider>
            </div>
      );
};

export default Main;