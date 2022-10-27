import './logo.css';
import OpeningShot from '../../assets/OpeningShot.mp4'; //rename

import React from 'react';

function Logo() {
  //
  return (
    <>
      <div className='backdrop'>
        <video autoPlay loop muted >
          <source src={ OpeningShot } type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Logo;