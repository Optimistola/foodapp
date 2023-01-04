import React from 'react';
import Pages from './pages'
function About(){
    return(
          <div className="hero-text">
            <Pages pageName={'About'}/>
            <h1 className='bold text-center text-red-600'>This is About</h1>
  
        </div>
        );
}
export default About;