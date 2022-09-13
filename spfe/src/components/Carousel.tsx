import React, { useState } from 'react';

import img1 from '../assets/new/cb.jpg';
import img2 from '../assets/new/uwu.jpg';
import img3 from '../assets/new/sb.jpg';

interface carouselItem {
  img: string,
  link: string
}

function Carousel(): JSX.Element {

  // TODO: we're not using carousel item links 
  // anymore, but we'll leave these attributes 
  // here for now, until we know for sure.
  const carouContent: Array<carouselItem> = [
    {img: img1, link: "/hi1"},
    {img: img2, link: "/hi2"},
    {img: img3, link: "/hi3"},
  ];
  const item_count = carouContent.length;
  const [carouIdx, setCarouIdx] = useState(0);

  const dots = Array.from({length: item_count}, (_, i) => {
    return <button className='dot' id={`dot-${i}`} onClick={() => goIdx(i)}/>
  });

  const goIdx = (idx: number) => {
    if (idx >= 0 && idx < item_count) {
      setCarouIdx(idx);
      Array.from(dots).forEach((_, i) => {
        const el = document.getElementById(`dot-${i}`);
        if (el) {
          el.style.opacity = i == idx ? '.7' : '.3';
        }
      });
    }
  };

  // Can remove goLeft and goRight later, add more checks to goIdx.
  const goLeft = () => {
    if (carouIdx > 0) {
      goIdx(carouIdx - 1);
    }
    else if (carouIdx <= 0) {
      goIdx(item_count - 1);
    }
  };

  const goRight = () => {
    if (carouIdx < item_count-1) {
      goIdx(carouIdx + 1)
    }
    else if (carouIdx >= item_count-1) {
      goIdx(0);
    }
  };


  return (
    <div className='carousel'>
      <button className='arrow-container left' onClick={goLeft}>
        &lsaquo;
      </button>
      <div className='carousel-content'>
        <div 
          style={{backgroundImage: `url(${carouContent[carouIdx].img})`, textDecoration: 'none'}} 
          className='carousel-item'>
          <div className='carousel-dots'>{dots}</div>
        </div>
      </div>
      <button className='arrow-container right' onClick={goRight}>
        &rsaquo;
      </button>
    </div>
  );
}

export default Carousel;