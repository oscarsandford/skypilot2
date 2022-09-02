import React from 'react';
import Carousel from '../components/Carousel';

function Home(): JSX.Element {
  return (
    <div>
      <Carousel/>
      <div className='container' id='home'>
      </div>
    </div>
  );
}

export default Home;