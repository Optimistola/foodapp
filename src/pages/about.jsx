import React from 'react';
import Pages from './pages';
import about1 from '../Component/images/about1.png';
import about2 from '../Component/images/about2.png';
import about3 from '../Component/images/about3.png';
function About(){
    return(
          <div className="hero-text">
            <Pages pageName={'About'}/>
            <div className=' mt-20 md:flex justify-center gap-10 lg:ml-20 '>
              <div className='md:w-[50%] ml-5 lg:w-[40%] ml-10 mr-10'>
                <img src={about1} className='lg:ml-20'/>
              </div>
              <div className=' ml-10 mr-10 lg:mt-20 lg:mr-20 lg:ml-20 flex-1'>
                <h2 className='font-bold text-3xl lg:text-5xl mr-10 lg:mr-20 mt-20'>Food is an important part of a balanced diet</h2>
                <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>
            </div>  
        </div>
        );
}
export default About;