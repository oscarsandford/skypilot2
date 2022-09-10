import React from 'react';
import { Link } from 'react-router-dom';


function Nav(): JSX.Element {
  const borger = document.getElementById('borger');
  const menu = document.getElementById('menu');
  const borgerToggle = async () => {
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