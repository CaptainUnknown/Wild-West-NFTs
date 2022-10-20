import './home.css';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import VanillaTilt from 'vanilla-tilt';

import TopLogo from '../../assets/topLogo.png';
import Splash from '../../assets/splash.jpg';
import Space from '../../assets/spaceBackground.jpg';
import Navy from '../../assets/navyBlue.jpg';
import Smoke from '../../assets/abstractSmoke.jpg';
import WhiteSmoke from '../../assets/whiteSmoke.jpg';

import NFTCard1 from '../../assets/images/nft-card-1.png';
import NFTCard2 from '../../assets/images/nft-card-2.png';
import NFTCard3 from '../../assets/images/nft-card-3.png';
import NFTCard4 from '../../assets/images/nft-card-4.png';
import NFTCard5 from '../../assets/images/nft-card-5.png';

import AccessPass from '../../assets/accessPass.gif';

function Home() {
  const options = {
    scale: 1.3,
    speed: 7000,
    max: 30
  };

  return (<>

    <div className='home'>
      <div className='a'> {/*<SomeIcon/>*/} Play Trailer </div>
      <div className='spaceOut'></div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.9) 35%, rgba(18,18,18,0.9) 65%, rgba(18,18,18,1) 75%), url(${TopLogo})`}}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Break On through </button>
        <div className='introHeading'>
          <h1> WILD WEST </h1><span> UNDEAD </span>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </motion.div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.7) 35%, rgba(18,18,18,0.7) 65%, rgba(18,18,18,1) 75%), url(${Splash})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Leave your mark </button>
        <div className='introHeading'>
        <h1> FIRST TO </h1><span> THE </span><h1> FUTURE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </motion.div>

      <div className='NFTWrapper'>
        <motion.div
        className='NFTMotion'
        initial={{ x: -100 }}
        animate={{ x: 1620 }}
        transition={{ duration: 15, delay: 0, ease: 'linear', repeat: Infinity }}
        >
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
        </motion.div>
      </div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.8) 35%, rgba(18,18,18,0.8) 65%, rgba(18,18,18,1) 75%), url(${Space})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Own a Piece </button>
        <div className='introHeading'>
          <h1> YOUR </h1><span> NFTS</span><h1> AWAIT </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </motion.div>
      
      <motion.div className='statsGrid'
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <div className='statColumn'> 10 ETH
          <span> Floor Price </span>
          <div className='statLine'></div>
          <p> Some Details go here </p>
        </div>
        <div className='statColumn'> 2000
          <span> Community Members </span>
          <div className='statLine'></div>
          <p> Some Details go here </p>
        </div>
        <div className='statColumn'> 4096
          <span> Total NFTs </span>
          <div className='statLine'></div>
          <p> Some Details go here </p>
        </div>
      </motion.div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.8) 35%, rgba(18,18,18,0.8) 65%, rgba(18,18,18,1) 75%), url(${Navy})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Interoperable </button>
        <div className='introHeading'>
        <h1> COME AS </h1><span> YOU</span><h1> ARE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </motion.div>

      <div className='NFTWrapper'>
        <motion.div
        className='NFTMotion'
        initial={{ x: -100 }}
        animate={{ x: 1620 }}
        transition={{ duration: 15, delay: 0, ease: 'linear', repeat: Infinity }}
        >
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
        </motion.div>
      </div>

      <div className='NFTWrapper'>
        <motion.div
        className='NFTMotion'
        initial={{ x: 1620 }}
        animate={{ x: -100 }}
        transition={{ duration: 15, delay: 0, ease: 'linear', repeat: Infinity }}
        >
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ NFTCard4 } alt='NFT Name'/>
          </div>

        </motion.div>
      </div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.9) 35%, rgba(18,18,18,0.9) 65%, rgba(18,18,18,1) 75%), url(${Smoke})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Make it your own </button>
        <div className='introHeading'>
          <h1> CREATE FOR </h1><span> THE </span><h1> OTHERSIDE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
        <button className='moreButton'> Sign Up </button>
      </motion.div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.8) 35%, rgba(18,18,18,0.8) 65%, rgba(18,18,18,1) 75%), url(${WhiteSmoke})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <motion.div style={{ width: '100%', alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        initial={{ opacity: 0, y: 10, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}>
          <Tilt className="accessPass" options={options}>
            <img src={ AccessPass } alt='Access Pass'/>
          </Tilt>
        </motion.div>
        <button className='badgeButton'> Token </button>
        <div className='introHeading'>
          <h1> ACCESS PASS </h1><span> FOR </span><h1> YOUR VOYAGE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
        <button className='moreButton'> Learn More </button>
      </motion.div>

      <motion.div className='description'  style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.8) 35%, rgba(18,18,18,0.8) 65%, rgba(18,18,18,1) 75%), url(${Splash})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Immersive & Interactive </button>
        <div className='introHeading'>
          <h1> GAME-CHANGING</h1><span> TECH </span>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
        <button className='moreButton'> Learn More </button>
        <div className='featuresGrid'>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
        </div>
      </motion.div>

      <motion.div className='outro'
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <h1> SEE YOU ON THE OTHERSIDE </h1>
        <div className='outroButtons'>
          <button> BUY NFT </button>
          <button> CLAIM NFT </button>
        </div>
      </motion.div>

    </div>
  
  </>
  );
}

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default Home;