import React from 'react';
import Pages from './pages';
import chef1 from '../Component/images/chef1.png'
import chef2 from '../Component/images/chef2.png'
import chef3 from '../Component/images/chef3.png'
import chef4 from '../Component/images/chef4.png'
import chef5 from '../Component/images/chef5.png'
import chef6 from '../Component/images/chef6.png'
import chef7 from '../Component/images/chef7.png'
import chef8 from '../Component/images/chef8.png'
import chef9 from '../Component/images/chef9.png'
import chef10 from '../Component/images/chef10.png'
import chef11 from '../Component/images/chef11.png'
import chef12 from '../Component/images/chef12.png'

function Chef(){
    return(
          <div className="hero-text">
            <Pages pageName={'Chef'}/>
            <h2 className='font-bold text-center mt-10 text-2xl text-red-600'>Meet Our Chefs</h2>
            <div className='mt-20 flex flex-wrap items center gap-4 justify-center md:ml-20 md:mr-20'>
               <div className='w-[40%] md:w-[30%] lg:w-[20%] flex flex-col items-center font-bold text-xl'>
                <img src={chef1} className=' '/>
                <p>Tahmina Rumi</p>
               </div> 
               <div className='w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef2}className=' '/>
                <p> Jorina Begum</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef3} className=''/>
                <p>M.Mohammad</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef4}/>
                <p>Munna Kathy</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef5}/>
                <p>Tahmina Rumi</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef6}/>
                <p>Motin Molladsf</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef7}/>
                <p>William Rumi</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef8}/>
                <p>Kets william roy</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef9}/>
                <p>Mahmud kholil</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef10}/>
                <p>Ataur Rahman</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef11}/>
                <p> Bisnu devgon</p>
               </div>
               <div className=' w-[40%] md:w-[30%] lg:w-[20%]  flex flex-col items-center font-bold text-xl'>
                <img src={chef12}/>
                <p>Monalisa holly</p>
               </div>
            </div>  
        </div>
        );
}
export default Chef;