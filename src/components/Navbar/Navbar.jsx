import './navbar.css';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring  } from 'framer-motion/dist/framer-motion';

function Navbar() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const controlNavbar = () => {
    if (window.scrollY > 4550){
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
        <motion.div className='navAccent' style={{ scaleX }} ></motion.div>
        <div className='navPages'>
          <a> HOME    </a>
          <a> ABOUT   </a>
          <a> MORE    </a>
          <a> MY NFTS </a>
          <button> CONNECT </button>
        </div>
      </div>

    </>
  );
}

export default Navbar;