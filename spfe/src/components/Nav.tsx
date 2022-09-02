import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  // Fix this.
  const borger = document.querySelector('borger');
  const borgerToggle = async () => {
    console.log("hi");
    if (borger) {
      borger.classList.toggle('is-active');
    }
  };

  return (
    <nav>
      <h2 className='title'>Sky Pilot Enterprises</h2>
      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/brands'>Brands</Link>
      </div>
      <button className='borger' onClick={borgerToggle}>
        <span/>
        <span/>
        <span/>
      </button>
    </nav>
  );
}

export default Nav;