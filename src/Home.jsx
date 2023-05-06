import React from 'react';
import Banner from './components/Banner';
import useTitle from './hooks/useTitle';

const Home = () => {
      useTitle('Home')
      return (
            <div>
                  
                 <Banner/>
            </div>
      );
};

export default Home;