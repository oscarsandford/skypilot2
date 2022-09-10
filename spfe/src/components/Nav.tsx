import React from 'react';
import { Link } from 'react-router-dom';


function Nav(): JSX.Element {
  
  const borgerToggle = async () => {
    // Retrieve elements on call, otherwise they may not be valid
    // if initialized earlier (i.e. before this function definition).
    const borger = document.getElementById('borger');
    const menu = document.getElementById('menu');
    if (borger && menu) {
      borger.classList.toggle('active');
      menu.classList.toggle('dropdown');
    }
  };

  return (
    <nav>
      <h2 className='title'>Sky Pilot Enterprises</h2>
      <div id='menu' className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/brands'>Brands</Link>
      </div>
      <button id='borger' className='borger' onClick={borgerToggle}>
        <span/>
        <span/>
        <span/>
      </button>
    </nav>
  );
}

export default Nav;