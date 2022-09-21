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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Quam nulla porttitor massa id neque aliquam. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Accumsan in nisl nisi scelerisque eu ultrices vitae. Sagittis orci a scelerisque purus semper eget duis at tellus. Enim blandit volutpat maecenas volutpat blandit aliquam. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.'
      ]} gallery={imgs_coros} iidx={iidx}/>
      <Brand name='INSTINCT' icon={instinct_icon} paragraphs={[
        'Quam nulla porttitor massa id neque aliquam. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Accumsan in nisl nisi scelerisque eu ultrices vitae. Sagittis orci a scelerisque purus semper eget duis at tellus. Enim blandit volutpat maecenas volutpat blandit aliquam. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.'
      ]} gallery={imgs_instinct} iidx={iidx}/>
      <Brand name='METOLIUS' icon={metolius_icon} paragraphs={[
        'Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.',
        'Id consectetur purus ut faucibus. At consectetur lorem donec massa sapien faucibus et molestie. Eget aliquet nibh praesent tristique magna. Quis risus sed vulputate odio ut enim blandit volutpat. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam vestibulum morbi blandit cursus risus. Fusce id velit ut tortor pretium. Mattis pellentesque id nibh tortor id aliquet.'
      ]} gallery={imgs_metolius} iidx={iidx}/>
      <Brand name='NORTEC' icon={nortec_icon} paragraphs={[
        'Aenean vel elit scelerisque mauris. Cursus metus aliquam eleifend mi in nulla.',
        'Eleifend quam adipiscing vitae proin sagittis. Urna et pharetra pharetra massa massa ultricies mi quis. In iaculis nunc sed augue lacus viverra. Tempor id eu nisl nunc mi.'
      ]} gallery={imgs_nortec} iidx={iidx}/>
    </div>
  );
}

export default Brands;