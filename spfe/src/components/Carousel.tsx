import React, { useState } from 'react';

import img1 from '../assets/new/cb.jpg';
import img2 from '../assets/new/uwu.jpg';
import img3 from '../assets/new/sb.jpg';

function Carousel(): JSX.Element {

  const imgSrcs: Array<string> = [
    img1, img2, img3
  ];
  const imgCount: number = imgSrcs.length;
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const goLeft = () => {
    if (currImgIdx > 0) {
      setCurrImgIdx(currImgIdx - 1)
    }
    else if (currImgIdx <= 0) {
      setCurrImgIdx(imgCount - 1);
    }
  };

  const goRight = () => {
    if (currImgIdx < imgCount-1) {
      setCurrImgIdx(currImgIdx + 1)
    }
    else if (currImgIdx >= imgCount-1) {
      setCurrImgIdx(0);
    }
  };

  return (
    <div className='carousel'>
      <button className='arrow-btn left-arrow' onClick={goLeft}/>
      <div className='carousel-content'>
        <div className='carousel-item'>
          <img src={imgSrcs[currImgIdx]} alt='new'/>
        </div>
      </div>
      <button className='arrow-btn right-arrow' onClick={goRight}/>
    </div>
  );
}

export default Carousel;