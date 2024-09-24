import { useState } from 'react';
import './Hero.css';

import { Link } from 'react-scroll';
import { useEffect } from 'react';

function Hero(){
   
      

    return (<>
    
    <div className="nav-hero">
      

    <div className="hero">
    
       <div className="hero-content">
        <h2 className='heading'>Pamper Your Pets with Woofit!</h2>
        <p className='sub-heading'>Everything your pet needs, all in one place – from treats to toys and grooming essentials</p>
        <button><Link to='services' smooth={true} offset={-145} duration={1000}>Explore Our Services</Link></button>
        </div>
    </div>
    </div>
    
        
      
      </>);
}

export default Hero