import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/new/cb.jpg';
import img2 from '../assets/new/uwu.jpg';
import img3 from '../assets/new/sb.jpg';

interface carouselItem {
  img: string,
  link: string
}

function Carousel(): JSX.Element {

  const carouContent: Array<carouselItem> = [
    {img: img1, link: "/hi1"},
    {img: img2, link: "/hi2"},
    {img: img3, link: "/hi3"},
  ];
  const [carouIdx, setCarouIdx] = useState(0);

  const goLeft = () => {
    if (carouIdx > 0) {
      setCarouIdx(carouIdx - 1)
    }
    else if (carouIdx <= 0) {
      setCarouIdx(carouContent.length - 1);
    }
  };

  const goRight = () => {
    if (carouIdx < carouContent.length-1) {
      setCarouIdx(carouIdx + 1)
    }
    else if (carouIdx >= carouContent.length-1) {
      setCarouIdx(0);
    }
  };

  return (
    <div className='carousel'>
      <button className='arrow-btn left-arrow' onClick={goLeft}/>
      <div className='carousel-content'>
        <Link 
          to={`${carouContent[carouIdx].link}`} 
          style={{backgroundImage: `url(${carouContent[carouIdx].img})`, textDecoration: 'none'}} 
          className='carousel-item'/>
      </div>
      <button className='arrow-btn right-arrow' onClick={goRight}/>
    </div>
  );
}

export default Carousel;