import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
      return (
            <div className="hero min-h-screen  py-10 mb-10">
                  <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                        <img className=' md:w-[70%] lg:w-[35%] h-[100%] rounded-lg' src="https://img.freepik.com/premium-vector/3d-online-shopping-websites-mobile-applications-concepts-marketing-digital-marketing_131114-12.jpg?w=740" />
                        <div>
                              <h1 className="text-5xl font-bold">New Collection For Fall!</h1>
                              <p className="py-6">Discover all the new arrivals of ready-to-wear collection.</p>
                             <Link to='/shop'> <button className="btn btn-primary">SHOP NOW</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;