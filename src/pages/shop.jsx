import {React, useState, useContext, useEffect} from 'react';
import Pages from './pages'
import ProductList from '../Component/shopFile';
import image3 from "../Component/images/about4.png";
import { BiChart, BiSearch} from 'react-icons/bi';
import { FaHeart, FaShoppingBag} from 'react-icons/fa';
import storeWish from '../Component/storewish';


function Shop(props){

  let handleSearch=(event)=>{
    let shopItem=document.querySelector('#shopitem');
    let shopItems= shopItem.querySelectorAll('#text');
   for(let i=0; i<shopItems.length; i++){
     if(shopItems[i].querySelector('.key').textContent.toUpperCase().indexOf(event.target.value.toUpperCase())>=0){
      shopItems[i].style.display='block';
     }else{
      shopItems[i].style.display='none';
     }
   }
  }
  const[value, setValue]=useState(0);
  let handleRange=(e)=>{
    setValue(e.target.value);
    let shopItem=document.querySelector('#shopitem');
    let shopItems= shopItem.querySelectorAll('#text');
   for(let i=0; i<shopItems.length; i++){
    let shopItems= shopItem.querySelectorAll('#text');
     if(e.target.value<+(shopItems[i].querySelector('.price').querySelector('span').textContent)){
      shopItems[i].style.display='block';
     }else{
      shopItems[i].style.display='none';
     }
   }

  }
  const [selected, setSelected]=useState(0);
  let handleWishlist=(id)=>{
    setSelected(storeWish.push(id));
    alert(storeWish.length);

  }
      return(
        <div className="hero-text">
              <Pages pageName={'Shop'}/>
              <div className='mt-20 flex flex-col lg:flex-row-reverse  justify-center lg:mr-20'>
                <div >
                    <div className='ml-5 md:ml-20 lg:ml-0 flex-1 lg:mr-20' >
                        <div className='flex content-center juistify-center items-center'>
                          <input type='search' className='searchItem px-3 py-2 shadow bg-red-200'
                            onKeyUp={handleSearch} 
                          />
                          <span className='text-white px-3 py-3 bg-red-600'>
                            <BiSearch/>
                            </span>
                            </div>
                        <h3 className='font-bold text-xl'>Category</h3>
                        <p><input type='checkbox'/>   Sandwiches</p>
                        <p><input type='checkbox'/>   Burger</p>
                        <p><input type='checkbox'/>   Chicken chup</p>
                        <p><input type='checkbox'/>   Drink</p>
                        <p><input type='checkbox'/>   Thi</p>
                        <p><input type='checkbox'/>   Non-veg</p>
                        <p><input type='checkbox'/>   Uncategorized</p>
                        <div className='hero3 mt-10 mb-10 mr-20 lg:mr-0 text-red-600 font-bold '>
                            <p className='ml-5'>Perfect Taste</p>
                            <p className='ml-5'>Classic Restaurant</p>
                            <p className='ml-5 mb-20'>45.00$</p>
                            <p className='ml-5'>Shop Now</p>
                      </div>
                      <div>
                        <label className='text-xl font-bold mb-2 '>Filter by price</label><br/>
                          <input type='range' className='range bg-red-600 w-[80%]  h-2 appearance:none cursor-pointer' value={value} min='6' max='43' onChange={handleRange} />
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col justify-center content-center lg:ml-10 xl-[20] lg:w-[80%]'>
                <label className=' mt-10 font-bold text-lg ml-20'>Short by:
                <select className='w-[30%] ml-2 h-10 mb-10 outline-none shadow  bg-gray-10'>
                  <option>Deafault</option>
                  <option>Category</option> 
                </select></label>
              <div className='lg:ml-14  flex flex-wrap justify-center items-start gap-6' id='shopitem'>
              {ProductList.map(items=>(
                <div className='flex flex-col ' id='text' class={items.id}>
                   <img src={items.img} className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[150px] lg:h-[150px] xl:w-[250px] xl:h-[250px] flex-1'/>
                   <h3 className='text-xl font-bold key'>{items.key}</h3>
                    <p className='text-red-600 price'>$<span>{items.price}</span>.00</p>
                    <div className='flex gap-2 mt-3 mb-3 text-red-600'><BiChart/><FaHeart  onClick={()=>handleWishlist(items)}/><FaShoppingBag/></div>
                    </div>
              ))}
              </div>
              </div>
              </div>
        </div>
        );
}
export default Shop;