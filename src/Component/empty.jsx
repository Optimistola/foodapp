import React from 'react';
import Pages from '../pages/pages';
import { Link } from 'react-router-dom'; 
function Empty(props){
    let {emptyImage, emptyM1, emptyM2, text}=props;
    return(
        <div className="hero-text">
              <div className='flex flex-col justify-center items-center'>
                <img src={emptyImage} className='w-[50%] md:w-[40%] lg:w-[30%]'/>
                <h2 className='text-xl font-bold text-red-600'>{emptyM1}</h2>
                <p>{emptyM2}</p>
                <button className='px-3 py-2 rounded text-white bg-red-600'><Link to='../shop'>{text}</Link></button>
              </div>
        </div>
        );
}
export default Empty;