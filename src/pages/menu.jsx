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
            <div className='flex flex-col-reverse lg:flex lg:flex-row  ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image13} className='px-2 py-3 ml-2 md:ml-10'/>
              <div className=' md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-5xl md:ml-10 lg:ml-0'>Starter Menu</h3>
               <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex  justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Alder Grilled Chinook Salmon</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$32</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
              </div>
              <div className='justify-center content-center mt-5 myshadow py-2  md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Berries and creme tart</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$43</h2>
                </div>
                <p className='text-sm ml-2'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className='ml-2'>700 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2  md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Ground cumin, avocados, peeled and cubed</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$14</h2>
                </div>
                <p className='text-sm ml-2'>Spreadable cream cheese, crumbled blue cheese</p>
                <p className='ml-2'>1000 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2  md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Spicy Vegan Potato Curry</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$35</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
              </div>
              </div>
            </div>
            <div className=' lg:flex-row flex flex-col-reverse ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image14} className='px-2 py-3 ml-2 md:ml-10'/>
              <div className=' md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-5xl md:ml-10 lg:ml-0'>Main Course</h3>
               <div className='justify-center content-center mt-5 myshadow py-2  md:ml-20 lg:ml-0'>
              <div className=' flex  justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Optic Big Breakfast Combo Menu</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$32</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
              </div>
              <div className='justify-center content-center mt-5 myshadow py-2  md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Cashew Chicken With Stir-Fry</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$43</h2>
                </div>
                <p className='text-sm ml-2'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className='ml-2'>700 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2  md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Vegetables & Green Salad</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$14</h2>
                </div>
                <p className='text-sm ml-2'>Ground cumin, avocados, peeled and cubed</p>
                <p className='ml-2'>1000 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2  md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Spicy Vegan Potato Curry</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$35</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
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
            <div className='lg:flex lg:flex-row flex flex-col-reverse ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image13} className='px-2 py-3 ml-2 md:ml-10'/>
              <div className=' md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-5xl md:ml-10 lg:ml-0'>Dessert</h3>
               <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Fig and lemon cake</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$32</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
              </div>
              <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Creamy mascarpone cake</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$43</h2>
                </div>
                <p className='text-sm ml-2'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className='ml-2'>700 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Pastry, blueberries, lemon juice</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$14</h2>
                </div>
                <p className='text-sm ml-2'>Spreadable cream cheese, crumbled blue cheese</p>
                <p className='ml-2'>1000 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Pain au chocolat</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$35</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
              </div>
              </div>
            </div>
            <div className='lg:flex lg:flex-row flex flex-col-reverse ml-5 mr-5 md:mr-10 gap-20 mt-20 mb-10'>
              <img src={image14} className='px-2 py-3 ml-2 md:ml-10'/>
              <div className=' md:mr-20 mt-10 flex-1'>
               <h3 className='font-bold text-5xl ml-5 md:ml-10'>Drinks</h3>
               <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex  justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Caffè macchiato</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$32</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
              </div>
              <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Aperol Spritz Capacianno</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$43</h2>
                </div>
                <p className='text-sm ml-2'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className='ml-2'>700 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Caffe Latte Campuri</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$14</h2>
                </div>
                <p className='text-sm ml-2'>Spreadable cream cheese, crumbled blue cheese</p>
                <p className='ml-2'>1000 CAL</p>
              </div>
               <div className='justify-center content-center mt-5 myshadow py-2 md:ml-20 lg:ml-0'>
              <div className=' flex justify-between'>
                <h2 className='font-bold text-lg md:text-2xl hover:text-red-600 ml-2'>Tormentoso BushTea Pintoage</h2>
                <h2 className='text-red-600 font-bold text-xl mr-2'>$35</h2>
                </div>
                <p className='text-sm ml-2'>Toasted French bread topped with romano, cheddar</p>
                <p className='ml-2'>560 CAL</p>
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
