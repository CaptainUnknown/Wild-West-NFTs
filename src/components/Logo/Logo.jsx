import './logo.css';
//import  from '../../assets/.mp4'; //rename

import React from 'react';

function Logo() {
  //<source src={ /*name*/ } type="video/mp4" />
  return (
    <>
      <div className='backdrop'>
        <video autoPlay loop muted >
            
        </video>
      </div>
    </>
  );
}

export default Logo;