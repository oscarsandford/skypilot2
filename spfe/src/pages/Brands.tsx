import React, { useEffect, useState } from 'react';

import Brand from '../components/Brand';

import coros_icon from '../assets/logo/coros.png';
import instinct_icon from '../assets/logo/instinct.png';
import metolius_icon from '../assets/logo/metolius.png';
import nortec_icon from '../assets/logo/nortec.png';

import coros_a1 from '../assets/action/coros_a01.png';
import coros_a3 from '../assets/action/coros_a03.png';
import coros_a4 from '../assets/action/coros_a04.png';
import coros_a5 from '../assets/action/coros_a05.png';
import coros_a6 from '../assets/action/coros_a06.png';

import instinct_a2 from '../assets/action/instinct_a02.png';
import instinct_a3 from '../assets/action/instinct_a03.png';
import instinct_a4 from '../assets/action/instinct_a04.png';
import instinct_a5 from '../assets/action/instinct_a05.png';
import instinct_a6 from '../assets/action/instinct_a06.png';

import metolius_a1 from '../assets/action/metolius_a01.png';
import metolius_a2 from '../assets/action/metolius_a02.png';
import metolius_a3 from '../assets/action/metolius_a03.png';
import metolius_a4 from '../assets/action/metolius_a04.png';
import metolius_a7 from '../assets/action/metolius_a07.png';

import nortec_a1 from '../assets/action/nortec_a01.png';
import nortec_a2 from '../assets/action/nortec_a02.png';
import nortec_a3 from '../assets/action/nortec_a03.png';
import nortec_a4 from '../assets/action/nortec_a04.png';
import nortec_a5 from '../assets/action/nortec_a05.png';


function Brands(): JSX.Element {
  const max_idx = 4;
  const imgs_coros = Array<string>(coros_a1, coros_a3, coros_a4, coros_a5, coros_a6);
  const imgs_instinct = Array<string>(instinct_a2, instinct_a3, instinct_a4, instinct_a5, instinct_a6);
  const imgs_metolius = Array<string>(metolius_a1, metolius_a2, metolius_a3, metolius_a4, metolius_a7);
  const imgs_nortec = Array<string>(nortec_a1, nortec_a2, nortec_a3, nortec_a4, nortec_a5);

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
      <Brand name='COROS' icon={coros_icon} paragraphs={[
        'Coros enables athletes to train to be their best. Through the use of intuitive interfaces and dependable hardware, users have pushed the extremes and set world records in a variety of outdoor activities.',
        ''
      ]} gallery={imgs_coros} iidx={iidx}/>
      <Brand name='INSTINCT' icon={instinct_icon} paragraphs={[
        'Instinct places a focus on reducing their environmental footprint by using recycled polyester in a part of their products. The result is a lightweight, uncompromising product for trail running and scrambling.',
        ''
      ]} gallery={imgs_instinct} iidx={iidx}/>
      <Brand name='METOLIUS' icon={metolius_icon} paragraphs={[
        'Based in Bend, Oregon since 1983, Metolius Climbing designs a wide array of reliable gear for rock climbing and bouldering "by climbers, for climbers."',
        ''
      ]} gallery={imgs_metolius} iidx={iidx}/>
      <Brand name='NORTEC' icon={nortec_icon} paragraphs={[
        'Known for their lightweight products and micro crampon techonology, Nortec aims to design the best gear for quickly moving through any terrain across mountains and through valleys.',
        ''
      ]} gallery={imgs_nortec} iidx={iidx}/>
    </div>
  );
}

export default Brands;