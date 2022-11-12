import './video.css';
import OpeningShot from '../../assets/OpeningShot.mp4'; //use props to pass in the video file

import React from 'react';

function Video() {
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

export default Video;