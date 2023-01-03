import React from 'react';
import image1 from "../Component/images/Image1.png";
import image2 from "../Component/images/image2.png";
import image3 from "../Component/images/image3.png";
import image4 from "../Component/images/image4.png";
import image5 from "../Component/images/image5.png";
import image7 from "../Component/images/image7.png";
import image8 from "../Component/images/image8.png";
import image9 from "../Component/images/image9.svg";
import image10 from "../Component/images/image10.svg";
import image11 from "../Component/images/image11.svg";
import image12 from "../Component/images/image12.svg";
import {Link} from "react-router-dom";
import { BiCheck } from 'react-icons/bi'

function Home(){
    return(
        <div className=''>
          <div className='md:flex mt-10 justify-around ml-5'>
            <div className='mt-5 lg:ml-20  mr-10'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl mr-10 lg:mr-20'><span className='text-red-600'>Th</span>e Art of speed food Quality</h1>
            <p className='  mt-4 mb-8 lg:mr-10 text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
            <button className='bg-red-600 rounded-full  text-white py-3 px-5'><Link to='../menu'>See menu</Link></button>
            </div>
            <div className='lg:mr-20'>
                <img src={image1} alt="food item" className=''/>
        </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-4 ml-5 lg:ml-20 mt-20 '>
            <div className='flex-1 lg:mt-10'> 
               <h2 className='font-bold md:text-4xl text-3xl lg:text-6xl mb-3 md:mb-5'><span className='text-red-600'>We</span> Create the best food products</h2>
               <p className='mb-10 mr-6 text-lg md:mr-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
               <p className='flex items-center content-center  gap-6 mb-3  mr-5'><BiCheck/>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
               <p className='flex items-center content-center gap-6 mb-3  mr-5'><BiCheck/>Quisque diam pellentesque bibendum non dui volutpat fringilla</p>
              <p className='flex items-center content-center gap-6 mb-3  mr-5'><BiCheck/>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button className='bg-red-600 rounded-full  text-white py-3 px-5'><Link to='../about'>Read more</Link></button>
        </div>
        <div className=' mb-10 md:mr-0 mr-10 lg:mr-20 flex-1 md:mt-20'>
            <div className='mb-5'>
                <img src={image2} alt='image2' className='w-[100%] md:w-[90%] '/>
            </div>
            <div className='flex gap-3'>
                <img src={image3} alt='image3' className='w-[50%] md:w-[48%]'/>
                <img src={image4} alt='image4' className='w-[50%] md:w-[48%]'/>
            </div>
        </div>
            </div>
            <div className='px-4 md:px-12 lg:px-40 py-8 lg:py-20 flex flex-col justify-center items-center'>
               <h3 className='text-center text-red-600 text-bold'>Food category</h3>
               <h2 className='font-bold text-3xl text-center'>Choose Food item</h2>
               <div className='flex flex-wrap gap-4 sm: ml-5 md:ml-10'>
                <img src={image5} alt='image5 ' className='w-[47%] md:w-[22%]'/>
                <img src={image7} alt='image6' className='w-[47%] md:w-[22%]'/>
                <img src={image7} alt='image7' className='w-[47%] md:w-[22%]'/>
                <img src={image8} alt='image8' className='w-[47%] md:w-[22%]'/>
               </div>
            </div>
            <div className='flex flex-wrap gap-12 px-4 md:px-12 lg:px-40 py-8 lg:py-20 justify-around items-center bgr]'>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image9} alt='image9' className='w-[60%]' />
                    <p className='text-bold text-4xl'>420</p>
                    <p>Professional chef</p>
                </div>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image10} alt='image10' className='w-[60%]' />
                    <p className='text-bold text-4xl'>320</p>
                    <p>Food items</p>
                </div>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image11} alt='image11' className='w-[60%]' />
                    <p className='text-bold text-4xl'>30+</p>
                    <p>Years Of Experience</p>
                </div>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image12} alt='image12' className='w-[60%]' />
                    <p className='text-bold text-4xl'>220</p>
                    <p className='text-center'>Happy Customers</p>
                </div>
            </div>
        </div>
        
        );
}
export default Home;