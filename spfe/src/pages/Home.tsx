import React from 'react';
import Carousel from '../components/Carousel';
import ImgLinkBlock from '../components/ImgLinkBlock';

import img1 from '../assets/new/cb.jpg';
import img2 from '../assets/new/uwu.jpg';
import img3 from '../assets/new/sb.jpg';

function Home(): JSX.Element {
  return (
    <div>
      <Carousel/>
      <div className='container' id='home'>
        <div className='block-grid'>
          <ImgLinkBlock img={img1} 
            title={"BRAND 1"} 
            text={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            link="/b1"
          />
          <ImgLinkBlock img={img2} 
            title={"BRAND 2"} 
            text={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
            link="/b2"
          />
          <ImgLinkBlock img={img3} 
            title={"BRAND 3"} 
            text={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            link="/b3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;