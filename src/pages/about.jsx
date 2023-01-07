import React from 'react';
import Pages from './pages';
import about1 from '../Component/images/about1.png';
import about4 from '../Component/images/about4.png';
import about5 from '../Component/images/about5.png';
import about6 from '../Component/images/about6.png';
import about7 from '../Component/images/about7.png';
import {BiPlay} from 'react-icons/bi'
function About(){
    return(
          <div className="hero-text">
            <Pages pageName={'About'}/>
            <div className=' mt-20 md:flex justify-center md:gap-3 gap-10 lg:ml-20 '>
              <div className='md:w-[50%] ml-5 lg:w-[40%] ml-10 md:ml-5 mr-10'>
                <img src={about1} className='lg:ml-20 md:mr-10'/>
              </div>
              <div className=' mr-5 lg:mt-20 lg:mr-20 lg:ml-20 flex-1 mt-10 md:mt-0'>
                <h2 className='ml-5 font-bold text-3xl lg:text-5xl lg:mr-20 lg:mt-20'>Food is an important part of a balanced diet</h2>
                <p className='mt-10 md:ml-0 ml-5 lg:mr-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                 <div className='flex gap-10 items-center content-center'>
                   <button className='bg-red-600 py-2 px-3 text-white ml-5 rounded lg:ml-0 mt-5'>Show more</button>
                   <p className='bg-red-600 w-[20px] h-[20px] rounded-full text-white flex items-center justify-center content-center'><BiPlay/></p><p>Watch video</p> 

                 </div>
              </div>
            </div>  
            <div className='text-center mt-10 lg:ml-20 lg:mr-20 ml-5 mr-5'>
              <div className='flex flex-col mb-10 items-center content-center justify-center'>
                <h2 className='font-bold text-4xl'>Why Choose us?</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                pellentesque bibendum non dui volutpat fringilla bibendum.</p>

              </div>
              <img src={about4} className='ml-3 mr-5 md:ml-6 md :mr-10 w-[95%] lg:ml-20 lg:mr-20 lg:w-[90%] mb-20'/>
              <div className='flex justify-center gap-20 lg:ml-20 lg:mr-20 md:flex-row flex-col'>
                <div className='flex content-center items-center flex-col'>
                  <img src={about5} />
                  <h2 className='font-bold text-xl'>Best Chef</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
                <div className='flex content-center items-center flex-col'>
                  <img src={about6}/>
                  <h2 className='font-bold text-xl'>120 Item food</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
                <div className='flex content-center items-center flex-col'>
                  <img src={about7}/>
                  <h2 className='font-bold text-xl'>Clean Environment</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
              </div>
            </div>
        </div>
        );
}
export default About;