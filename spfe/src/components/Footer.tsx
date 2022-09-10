import React from 'react';

import spe_mtns_dark from '../assets/logo/spe_mtns_dark.jpg';

function Footer(): JSX.Element {
  return (
    <footer>
      <div id='footer-aside'>
        <img src={spe_mtns_dark} alt='spelogo'/>
      </div>
      <div>
        <h3>Brands</h3>
        <a target='_blank' rel='noopener noreferrer' href='https://coros.com/'>Coros</a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.instincttrail.com/'>Instinct</a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.metoliusclimbing.com/'>Metolius</a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.nortecsport.com/'>Nortec</a>
      </div>
      <div>
        <h3>Agency</h3>
        <a href='/about'>About Us</a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/skypilot.ent/'>Instagram</a>
        <a href='mailto:sandford@telus.net'>Email</a>
      </div>
      <div>
        <h3>Mail</h3>
        <p>
        Sky Pilot Enterprises, Inc. <br/>
        P.O. Box 1559 <br/>
        Garibaldi Highlands, BC<br/>
        V0N 1T0 Canada
        </p>
      </div>
    </footer>
  );
}

export default Footer;