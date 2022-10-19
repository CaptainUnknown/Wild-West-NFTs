import './home.css';
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import Logo from '../../components/Logo/Logo';

import NFTCard1 from '../../assets/images/nft-card-1.png';
import NFTCard2 from '../../assets/images/nft-card-2.png';
import NFTCard3 from '../../assets/images/nft-card-3.png';
import NFTCard4 from '../../assets/images/nft-card-4.png';
import NFTCard5 from '../../assets/images/nft-card-5.png';
//import NFTCard2 from '../../assets/';

//<Logo/>
function Home() {


  return (<>

    <div className='home'>
      <div className='a'> {/*<SomeIcon/>*/} Play Trailer </div>
      <div className='a'> Empty div with background </div>
      
      <div className='description'>
        <button className='badgeButton'> Break On through </button>
        <div className='introHeading'>
          <h1> ENTER </h1><span> THE </span><h1> OTHERSIDE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </div>

      <div className='description'>
        <button className='badgeButton'> Leave your mark </button>
        <div className='introHeading'>
        <h1> FIRST TO </h1><span> THE </span><h1> FUTURE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </div>

      <div id='slideshowLeft' className='slideshowLeft'>
        PA
      </div>

      <div className='description'>
        <button className='badgeButton'> Own a Piece </button>
        <div className='introHeading'>
          <h1> YOUR </h1><span> NFTS</span><h1> AWAIT </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </div>

      <div className='statsGrid'>
        <div className='a'>
        </div>
        <div className='a'>
        </div>
        <div className='a'>
        </div>
        <div className='a'>
        </div>
      </div>

      <div className='description'>
        <button className='badgeButton'> Interoperable </button>
        <div className='introHeading'>
        <h1> COME AS </h1><span> YOU</span><h1> ARE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </div>

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

      <div className='description'>
        <button className='badgeButton'> Make it your own </button>
        <div className='introHeading'>
          <h1> CREATE FOR </h1><span> THE </span><h1> OTHERSIDE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
        <button className='moreButton'> Sign Up </button>
      </div>

      <div className='description'>
        {/* <CardGIF/> */}
        <button className='badgeButton'> Token </button>
        <div className='introHeading'>
          <h1> COIN FOR </h1><span> YOUR </span><h1> VOYAGE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
        <button className='moreButton'> Learn More </button>
      </div>

      <div className='description'>
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
      </div>

      <div className='outro'>
        <h1> SEE YOU ON THE OTHERSIDE </h1>
        <div className='outroButtons'>
          <button> BUY NFT </button>
          <button> CLAIM NFT </button>
        </div>
      </div>

    </div>
  
  </>
  );
}

export default Home;