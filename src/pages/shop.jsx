import {React} from 'react';
import Pages from './pages'
import ProductList from '../Component/shopFile';
import image3 from "../Component/images/image7.png";
import { BiSearch } from 'react-icons/bi';


function Shop(){
    return(
        <div className="hero-text">
              <Pages pageName={'Shop'}/>
              <div className='mt-20 flex flex-col lg:flex-row-reverse  justify-center lg:mr-10'>
                <div >
                    <div className='ml-5 md:ml-20 lg:ml-0' >
                        <div className='flex content-center juistify-center items-center'><input type='search' className='px-3 py-2 shadow bg-red-200'/><span className='text-white px-3 py-3 bg-red-600'><BiSearch/></span></div>
                        <h3 className='font-bold text-xl'>Category</h3>
                        <p><input type='checkbox'/>   Sandwiches</p>
                        <p><input type='checkbox'/>   Burger</p>
                        <p><input type='checkbox'/>   Chicken chup</p>
                        <p><input type='checkbox'/>   Drink</p>
                        <p><input type='checkbox'/>   Thi</p>
                        <p><input type='checkbox'/>   Non-veg</p>
                        <p><input type='checkbox'/>   Uncategorized</p>
                        <div className='hero3 mt-10 mb-10 mr-20 lg:mr-0 text-white'>
                            <p className='ml-5'>Perfect Taste</p>
                            <p className='ml-5'>Classic Restaurant</p>
                            <p className='ml-5 mb-20'>45.00$</p>
                            <p className='ml-5'>Shop Now</p>
                      </div>
                    </div>
                </div>
                <div className=' flex flex-col justify-center content-center lg:ml-20'>
                <h3 className=' mt-10 mb-10 font-bold text-lg ml-10'>Short by</h3>
              <div className='lg:ml-14  flex flex-wrap justify-center gap-6'>
              {ProductList.map(items=>(
                <div className='flex flex-col'>
                   <img src={items.img} className='w-[150px] h-[150px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] flex-1'/>
                   <h3 className='text-xl font-bold'>{items.key}</h3>
                    <p className='text-red-600'>${items.price}.00</p>
                    </div>
              ))}
              </div>
              </div>
              </div>
        </div>
        );
}
export default Shop;