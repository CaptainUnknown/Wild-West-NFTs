import './footer.css';

import React from 'react';

import { ReactComponent as Twitter } from '../../assets/socials/twitter.svg';
import { ReactComponent as Discord } from '../../assets/socials/discord.svg';
import { ReactComponent as Youtube } from '../../assets/socials/youtube.svg';

import Logo from '../../assets/footerlogo.png';

function Footer() {

  return (
    <>

    <div className='footer'>
      <p> Stay Up to date </p>
      <div className='footerInput'>
        <input type='text' placeholder='Email Address' />
        <button> Subscribe </button>
      </div>

      <div className='footerCommunities'>
        <span> © 2022 Wild West NFTs  </span>
        <div className='footerCommunitiesPages'>
          <a> HOME </a>
          <a> HOME </a>
          <a> HOME </a>
          <a> HOME </a>
        </div>
        <div className='footerCommunitiesIcons'>
          <Discord/>
          <Twitter/>
          <Youtube/>
        </div>
      </div>
      <div className='footerLogo'>
        <img src={Logo} alt='logo'/>
      </div>
    </div>

    </>
  );
}

export default Footer;