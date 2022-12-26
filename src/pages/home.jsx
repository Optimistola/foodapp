import React from 'react';
import image1 from "../Component/images/Image1.png";
import {Link} from "react-router-dom"

function Home(){
    return(
        <div>
          <div className='md:flex mt-10 justify-around ml-5'>
            <div className='mt-5 md:ml-20 mr-50'>
            <h1 className='font-bold text-4xl md:text-6xl'><span className='text-red-600'>Th</span>e Art of speed food Quality</h1>
            <p className='  mt-4 mb-8 mr-10 text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
            <button className='bg-red-600 rounded-full  text-white py-3 px-5'><Link to='../menu'>See menu</Link></button>
            </div>
            <div className='md:mr-20 px-10'>
                <img src={image1} alt="food item" className='w-[500px]'/>
        </div>
        </div>
        <div>
            <h1>hi</h1>
        </div>
        </div>
        );
}
export default Home;