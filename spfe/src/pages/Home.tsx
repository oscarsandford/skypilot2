import React from 'react';
import Carousel from '../components/Carousel';
import ImgLinkBlock from '../components/ImgLinkBlock';
import ScrollRow from '../components/ScrollRow';
import Profile from '../components/Profile';

import dummy_img from '../assets/new/sb.jpg';
// import panorama_1 from '../assets/panorama/panorama_1.jpg';

import pfp_jgs from '../assets/pfp/pfp_jgs.jpg';
import pfp_jsw from '../assets/pfp/pfp_jsw.jpg';
import pfp_oes from '../assets/pfp/pfp_oes.jpg';


function Home(): JSX.Element {

  return (
    <div>
      <Carousel/>
      <div className='container' id='home'>
        <div className='block-grid'>
          <ImgLinkBlock img={dummy_img} 
            title={'COROS'} 
            text={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            link='/brands#COROS'
          />
          <ImgLinkBlock img={dummy_img} 
            title={'INSTINCT'} 
            text={'Duis aute irure dolor.'}
            link='/brands#INSTINCT'
          />
          <ImgLinkBlock img={dummy_img} 
            title={'METOLIUS'} 
            text={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            link="/brands#METOLIUS"
          />
          <ImgLinkBlock img={dummy_img} 
            title={'NORTEC'} 
            text={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            link='/brands/#NORTEC'
          />
        </div>
      </div>
      <div className='container blank'>
        <ScrollRow>
          <Profile pfp={pfp_jsw} name={'Jola Sandford'} position={'Director'} description={
              'A superstar rock climber since the 80\'s, Jola provides a unique business '+
              'direction, seeking out promising brands and organizing events.'}
          />
          <Profile pfp={pfp_jgs} name={'Jim Sandford'} position={'President'} description={
              'Jim has introduced new outdoor brands to the Canadian market for '+
              'nearly 30 years, during which he has built a repertoire of rock '+
              'climbing achievements.'}
          />
          <Profile pfp={pfp_oes} name={'Oscar Sandford'} position={'IT Specialist'} description={
              'Raised in the crags and mountains of the Sea to Sky country, Oscar develops '+
              'and maintains Sky Pilot\'s B2B software and information systems.'}
          />
        </ScrollRow>
      </div>
      {/* <div className='container blank' style={{backgroundImage: `url(${panorama_1})`, textDecoration: 'none'}}>
      </div> */}
      {/* Social media instagram embeds here. We can probably just use the images from the 
      posts instead of messing with (and having to get approval from Meta) the Instagram API.*/}
    </div>
  );
}

export default Home;