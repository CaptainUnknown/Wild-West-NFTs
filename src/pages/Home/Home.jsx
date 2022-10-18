import './home.css';
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import Logo from '../../components/Logo/Logo';
//<Logo/>
function Home() {


  return (<>

    <div className='home'>
      <div className='a'> {/*<SomeIcon/>*/} Play Trailer </div>
      <div className='a'> Empty div with background </div>

      <motion.div
      className='NFTs'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >NFTs</motion.div>
      
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
          <h1> FIRST TO THE FUTURE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </div>

      <div id='slideshowLeft' className='slideshowLeft'>
        PA
      </div>

      <div className='description'>
        <button className='badgeButton'> Own a Piece </button>
        <div className='introHeading'>
          <h1> YOUR OTHERDEEDS AWAIT </h1>
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
          <h1> COME AS YOU ARE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
      </div>

      <div className='slideshowLeft'>
        SlideShow NFT Cards - Left
      </div>
      <div className='slideshowRight'>
        SlideShow NFT Cards - Right
      </div>

      <div className='description'>
        <button className='badgeButton'> Make it your own </button>
        <div className='introHeading'>
          <h1> CREATE FOR THE OTHERSIDE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
        <button className='moreButton'> Sign Up </button>
      </div>

      <div className='description'>
        {/* <CardGIF/> */}
        <button className='badgeButton'> Token </button>
        <div className='introHeading'>
          <h1> COIN FOR YOUR VOYAGE </h1>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nulla non neque cursus interdum eget sed ante. Maecenas eleifend nisi eget aliquam aliquet. Nunc condimentum ex feugiat, malesuada ante eu, pellentesque tellus. Sed fermentum dignissim arcu in bibendum. Etiam at gravida arcu. Suspendisse commodo purus condimentum diam egestas, quis consequat elit convallis. Praesent ligula ante, pharetra sed consectetur non, auctor quis urna. Aliquam felis magna, feugiat vitae ultrices eget, tempus quis augue. Ut eleifend, lorem nec mollis sagittis, elit arcu facilisis felis, nec pellentesque mauris diam eget massa. Aenean egestas tincidunt ipsum, in aliquet est pellentesque sodales. Integer tristique libero et tortor faucibus, quis mattis neque molestie. Etiam porttitor dui quis tristique ultricies. </p>
        <button className='moreButton'> Learn More </button>
      </div>

      <div className='description'>
        <button className='badgeButton'> Immersive & Interactive </button>
        <div className='introHeading'>
          <h1> GAME-CHANGING TECH </h1>
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