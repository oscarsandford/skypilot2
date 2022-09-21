import React, { useState } from 'react';

import new1 from '../assets/new/n001.jpg';
import new2 from '../assets/new/n002.jpg';

interface carouselItem {
  img: string,
  link: string
}

function Carousel(): JSX.Element {

  // TODO: we're not using carousel item links 
  // anymore, but we'll leave these attributes 
  // here for now, until we know for sure.
  const carouContent: Array<carouselItem> = [
    {img: new1, link: ''},
    {img: new2, link: ''},
  ];
  const item_count = carouContent.length;
  const [carouIdx, setCarouIdx] = useState(0);

  const dots = Array.from({length: item_count}, (_, i) => {
    return <button className='dot' id={`dot-${i}`} onClick={() => goIdx(i)}/>
  });

  const goIdx = (idx: number) => {
    if (idx < 0) {
      idx = item_count-1;
    }
    else if (idx >= item_count) {
      idx = 0;
    }
    setCarouIdx(idx);
    Array.from(dots).forEach((_, i) => {
      const el = document.getElementById(`dot-${i}`);
      if (el) {
        el.style.opacity = i == idx ? '.9' : '.3';
      }
    });
  };

  return (
    <div className='carousel'>
      <button className='arrow-container left' 
        onClick={() => goIdx(carouIdx-1)}> &lsaquo;
      </button>
      <div className='carousel-content'>
        <div 
          style={{backgroundImage: `url(${carouContent[carouIdx].img})`, textDecoration: 'none'}} 
          className='carousel-item'>
          <div className='carousel-dots'>{dots}</div>
        </div>
      </div>
      <button className='arrow-container right' 
        onClick={() => goIdx(carouIdx+1)}> &rsaquo;
      </button>
    </div>
  );
}

export default Carousel;