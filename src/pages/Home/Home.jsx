import './home.css';
import lottie from 'lottie-web';
import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
//import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Navy from '../../assets/navyBlue.jpg';
import Splash from '../../assets/splash.jpg';
import TopLogo from '../../assets/topLogo.png';
import Smoke from '../../assets/abstractSmoke.jpg';
import Space from '../../assets/spaceBackground.jpg';
import WhiteSmoke from '../../assets/whiteSmoke.jpg';

import animationData from '../../assets/lottieLogo.json';

import CharactersNFTCard1 from '../../assets/images/characters/nft-card-1.png';
import CharactersNFTCard2 from '../../assets/images/characters/nft-card-2.png';
import CharactersNFTCard3 from '../../assets/images/characters/nft-card-3.png';
import CharactersNFTCard4 from '../../assets/images/characters/nft-card-4.png';
import CharactersNFTCard5 from '../../assets/images/characters/nft-card-5.png';
import CharactersNFTCard6 from '../../assets/images/characters/nft-card-6.png';

import MonstersNFTCard1 from '../../assets/images/monsters/nft-card-1.png';
import MonstersNFTCard2 from '../../assets/images/monsters/nft-card-2.png';
import MonstersNFTCard3 from '../../assets/images/monsters/nft-card-3.png';
import MonstersNFTCard4 from '../../assets/images/monsters/nft-card-4.png';
import MonstersNFTCard5 from '../../assets/images/monsters/nft-card-5.png';

import AccessPass from '../../assets/accessPass.gif';

import Logo from '../../components/Logo/Logo';

function Home() {
  const lottieRef = React.useRef(null);
  const options = {
    scale: 1.3,
    speed: 7000,
    max: 30
  };

  React.useEffect(() => {
    var animDuration = 5000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData
    });

    function animatebodymoving(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      animatebodymoving(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (<>

    <div className='home'>
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.75 }}>
        <Logo/>
      </motion.div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.9) 35%, rgba(18,18,18,0.9) 65%, rgba(18,18,18,1) 75%), url(${TopLogo})`}}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Break On through </button>
        <div className='introHeading'>
          <h1> WILD WEST </h1><span> UNDEAD </span>
        </div>
        <h2> We’ve been waiting for you… </h2>
        <p> Wild West Undead (WWU) is an Open World gaming experience where players blast their way through hordes of ravenous walking dead, nightmarish hell spawn, and other horrors stalking the world around you. Prepare to rustle up some firepower, and peel back the mystery of how a massive mining settlement became a ghost town overnight; race against the clock to find the right artifacts and close the portal deep in the old mine before the demons turn you into a meat puppet; forge alliances, backstab your pals for fun, bathe in gore, and do whatever it takes to emerge bloody and victorious from Los Diablos county. Remember: Keep your friends close and your enemies closer! </p>
      </motion.div>

      <div className='NFTWrapper'>
        <motion.div
        className='NFTMotion'
        initial={{ x: -100 }}
        animate={{ x: 1964 }}
        transition={{ duration: 25, delay: 0, ease: 'linear', repeat: Infinity }}
        >
          <div className='NFT'>
            <img src={ CharactersNFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard6 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard6 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ CharactersNFTCard6 } alt='NFT Name'/>
          </div>
        </motion.div>
      </div>

      <div className='NFTWrapper'>
        <motion.div
        className='NFTMotion'
        initial={{ x: 1620 }}
        animate={{ x: -100 }}
        transition={{ duration: 25, delay: 0, ease: 'linear', repeat: Infinity }}
        >
          <div className='NFT'>
            <img src={ MonstersNFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard5 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard1 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard2 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard3 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard4 } alt='NFT Name'/>
          </div>
          <div className='NFT'>
            <img src={ MonstersNFTCard5 } alt='NFT Name'/>
          </div>
        </motion.div>
      </div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.7) 35%, rgba(18,18,18,0.7) 65%, rgba(18,18,18,1) 75%), url(${Splash})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Leave your mark </button>
        <div className='introHeading'>
        <h1> CREATING THE </h1><span> WORLD! </span>
        </div>
        <p> Wild West Undead is being built in Epic Games’ Unreal Engine 5 (UE5), the industry-leading gaming engine. UE5’s latest technology provides our developers with unparalleled capabilities to bring our vision to life. Our game mechanics have been inspired from popular third-person shooter games, while also blending in new-wave web3-enabled virtual worlds. WWU’s team is working towards delivering high-quality design visualizations and cinematic experiences across multiple platforms to reach as many people as possible so we can build a vast community. Epic Games has invested millions of dollars in Unreal Engine to support blockchain gaming technology, giving us a competitive edge in providing a cutting-edge experience to our players. </p>
      </motion.div>

      <motion.div className='description' style={{"backgroundImage":`linear-gradient(rgba(18,18,18,1) 0%, rgba(18,18,18,0.8) 35%, rgba(18,18,18,0.8) 65%, rgba(18,18,18,1) 75%), url(${Space})` }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <button className='badgeButton'> Own a Piece </button>
        <div className='introHeading'>
          <h1> WHO WILL </h1><span> YOU </span><h1> BE? </h1>
        </div>
        <p> Own your WWU persona: Purchase custom NFT characters; utilize tokenomics in our open world economy; purchase land plots to create custom structures through our building system; cast NFT characters into our content creation program, which would compensate the holder on any revenue generated from the content; and play our variety of game modes, including our Ghost Town Zombie Wave and Free For All Battle Levels for the potential of play to earn. </p>
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
        <h1> ENTER THE </h1><span> UNDEAD </span><h1> WEST </h1>
        </div>
        <p style={{ paddingBottom: '0.4rem' }}> In 1948, a man named James W. Marshall found gold at a mill in Coloma, California, igniting the California Gold Rush, where hundreds of thousands of men came from all over the country in search of fortune. But it also brought members of the peyote and opium cartels who were looking to take over all the mines they could - by any means necessary. Deep in the Old Paiuches Desert, a reclusive tribe kept would-be settlers and cartel miners away from their sacred mountain; even going as far as disguising the mountain’s entrance with a chapel. On the base of the mountain, a town was built to keep an eye and give shelter to travelers. This was the birth of Los Diablos, California. A town where travelers rested for the night, where some came to hide, and others came to die. </p>
        <p style={{ paddingTop: '0.4rem', paddingBottom: '0.4rem' }}> Unfortunately, spies found out about the secret treasure in the mountain. The Cartel sent miners who saw that the Chapel was a front that led to tunnels filled to the brim with gold;  taking everything by force, they turned it into coins, jewelry, and even weapons. This angered the spirits, which caused them to put a curse on the town: “Until the last piece of gold is returned, the town will be under a siege of demons every night, and on every full moon, no one would be able to leave the town, even those who just pass by.” The greed of the cartels made it difficult to trace down all of the gold, some of the locals even joined the Cartel, while others did all they could to protect the people from the evil hordes. </p>
        <p style={{ paddingTop: '0.4rem' }}> Now, the town of Los Diablos is a hunting ground for the brave, the greedy, and those who have nothing to lose – so who exactly are you? </p>
      </motion.div>

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