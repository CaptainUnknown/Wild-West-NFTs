import './navbar.css';

import React, { useEffect, useState } from 'react';

function Navbar() {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 100){
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, [])

  return (
    <>

      <div className={`nav ${show && "nav__black"}`}>
        <div className='navAccent'></div>
        <div className='navPages'>
          <a> HOME </a>
          <a> ABOUT </a>
          <a> MORE </a>
          <a> MY NFTS </a>
          <button> CONNECT </button>
        </div>
      </div>

    </>
  );
}

export default Navbar;