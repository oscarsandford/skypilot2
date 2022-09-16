import React, { useEffect, useState } from 'react';

import coros_1 from '../assets/action/coros_DSC0129.png';
import coros_2 from '../assets/action/coros_DSC1233.jpg';

function Brands(): JSX.Element {
  // Arbitrary, but make sure each brand has +1 more than this number of imgs.
  const max_idx = 1;
  const coros_imgs = Array<string>(coros_1, coros_2);

  const [iidx, setIidx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (iidx === max_idx) setIidx(0);
      else setIidx(iidx + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [iidx]);

  return (
    <div className='container' id='brands'>
      <div className='container blank brand-row'>
        <div className='text'>
          <h2>Coros</h2>
          <h4>Sport Watches</h4>
          <p>hello world</p>
        </div>
        <div className='gallery'>
          <img src={coros_imgs[iidx]} alt=''/>
        </div>
      </div>
    </div>
  );
}

export default Brands;