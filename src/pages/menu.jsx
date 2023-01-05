import React from 'react';
import Pages from './pages';
import image13 from "../Component/images/image13.png";
import image14 from "../Component/images/image14.png";
import image9 from "../Component/images/image9.svg";
import image10 from "../Component/images/image10.svg";
import image11 from "../Component/images/image11.svg";
import image12 from "../Component/images/image12.svg";
import image15 from "../Component/images/image15.png";
import image16 from "../Component/images/image16.png";
import image17 from "../Component/images/image17.png";
import image18 from "../Component/images/image18.png";
import image19 from "../Component/images/image19.png";
import image20 from "../Component/images/image20.png";

function Menu(){
    return(
          <div className="hero-text">
            <Pages  page={'Our menu'} pageName={'Menu'}/>
            <div className='md:flex ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image13} className='px-2 py-3'/>
              <div className=' md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-4xl'>Starter Menu</h3>
               <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Alder Grilled Chinook Salmon</h2>
                <p className='text-sm'>Toasted French bread topped with romano, cheddar</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$32</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Berries and creme tart</h2>
                <p className='text-sm'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p>700 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$43</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Tormentoso Bush Pizza Pintoage</h2>
                <p className='text-sm'>Ground cumin, avocados, peeled and cubed</p>
                <p>1000 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$14</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Spicy Vegan Potato Curry</h2>
                <p  className='text-sm'>Spreadable cream cheese, crumbled blue cheese</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2  className='text-red-600 font-bold text-xl'>$35</h2>
              </div>
              </div>
              </div>
            </div>
            <div className='md:flex ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image14} className=' py-3'/>
              <div className='  md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-4xl'>Main Course</h3>
               <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Optic Big Breakfast Combo Menu</h2>
                <p className='text-sm'>Toasted French bread topped with romano, cheddar</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$32</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Cashew Chicken With Stir-Fry</h2>
                <p className='text-sm'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p>700 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$43</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Vegetables & Green Salad</h2>
                <p className='text-sm'>Ground cumin, avocados, peeled and cubed</p>
                <p>1000 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$14</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Spicy Vegan Potato Curry</h2>
                <p  className='text-sm'>Spreadable cream cheese, crumbled blue cheese</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2  className='text-red-600 font-bold text-xl'>$35</h2>
              </div>
              </div>
              </div>
            </div>
            <div className='hero2 text-white flex flex-wrap gap-12 px-4 md:px-12 lg:px-40 py-8 lg:py-20 justify-around items-center bgr]'>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image9} alt='image9' className='w-[60%]' />
                    <p className='font-bold text-4xl'>420</p>
                    <p>Professional chef</p>
                </div>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image10} alt='image10' className='w-[60%]' />
                    <p className='font-bold text-4xl'>320</p>
                    <p>Food items</p>
                </div>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image11} alt='image11' className='w-[60%]' />
                    <p className='font-bold text-4xl'>30+</p>
                    <p>Years Of Experience</p>
                </div>
                <div className='flex flex-col justify-center content-center items-center'>
                    <img src={image12} alt='image12' className='w-[60%]' />
                    <p className='font-bold text-4xl'>220</p>
                    <p className='text-center'>Happy Customers</p>
                </div>
            </div>
            <div className='md:flex ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image13} className='px-2 py-3'/>
              <div className=' md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-4xl'>Dessert</h3>
               <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-2'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Fig and lemon cake</h2>
                <p className='text-sm'>Toasted French bread topped with romano, cheddar</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$32</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Creamy mascarpone cake</h2>
                <p className='text-sm'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p>700 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$43</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Pastry, blueberries, lemon juice</h2>
                <p className='text-sm'>Ground cumin, avocados, peeled and cubed</p>
                <p>1000 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$14</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Pain au chocolat</h2>
                <p  className='text-sm'>Spreadable cream cheese, crumbled blue cheese</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2  className='text-red-600 font-bold text-xl'>$35</h2>
              </div>
              </div>
              </div>
            </div>
            <div className='md:flex ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image14} className='px-2 py-3'/>
              <div className=' md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-4xl'>Drinks</h3>
               <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Caffè macchiato</h2>
                <p className='text-sm'>Toasted French bread topped with romano, cheddar</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$32</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Aperol Spritz Capacianno</h2>
                <p className='text-sm'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p>700 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$43</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Caffe Latte Campuri</h2>
                <p className='text-sm'>Ground cumin, avocados, peeled and cubed</p>
                <p>1000 CAL</p>
              </div>
              <div className='mr-5'>
                <h2 className='text-red-600 font-bold text-xl'>$14</h2>
              </div>
              </div>
              <div className='flex justify-between content-center gap-20 mt-5 myshadow'>
              <div className='ml-5'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600'>Tormentoso BushTea Pintoage</h2>
                <p  className='text-sm'>Spreadable cream cheese, crumbled blue cheese</p>
                <p>560 CAL</p>
              </div>
              <div className='mr-5'>
                <h2  className='text-red-600 font-bold text-xl'>$35</h2>
              </div>
              </div>
              </div>
            </div>
            <h2 className='text-4xl font-bold text-center'>Partners & Clients</h2>
            <p className='font-2xl text-center'>We work with the best people</p>
            <div className='flex justify-center gap-10 flex-wrap'>
              <img src={image15} className='w-[25%]'/>
              <img src={image16}/>
              <img src={image17}/>
              <img src={image18}/>
              <img src={image19}/>
              <img src={image20}/>

            </div>
            </div>       
        );
}
export default Menu;