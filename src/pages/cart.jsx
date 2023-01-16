import React, {useState, useEffect} from 'react';
import cart from "../Component/images/cart.jpg";
import Empty from "../Component/empty";
import Pages from './pages';
import storeCart from '../Component/storeCart';
import { BiTrash } from 'react-icons/bi';
function Cart(){
  const [selected, setSelected ]=useState([]);
  const [item, setItem]=useState([]);
  useEffect(()=>{
   const storedItem=(JSON.parse(localStorage.getItem('cartitems')));
  setItem(storedItem);
  });
  let handleRemove=(id)=>{
    let removed= storeCart.findIndex(item=>item.id==id)
     setSelected(storeCart.splice(removed, 1));
   localStorage.setItem('cartitems', JSON.stringify(storeCart));
   };
   
return(
  <div>    
     <Pages pageName={'Cart'}/>
     <div >  
     <div className='flex flex-wrap mb-10 mt-20 lg:ml-20 ml-10 '>{ item.length > 0 ? 
     item.map( myItem=>(
      <div className=' mb-5 mt-10 lg:ml-10 ml-10 flex gap-6 md:flex-col'>
        <div>
       <img src={myItem.img} className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[150px] lg:h-[150px] xl:w-[250px] xl:h-[250px] flex-1'/>
       </div>
       <div className='mt-10'>
       <p className='font-bold text-xl'>{myItem.key}</p>
       <p>${myItem.price}.00</p>
       <div className=''>
       <button onClick={()=>handleRemove(myItem.id)} className=' py-2 px-2  rounded text-sm flex  items-center shadow text-red' ><BiTrash className=''/><p className='text-sm text-red-600'>remove</p></button>
</div>
</div>
      </div>
    )): 
     <Empty emptyImage={cart} emptyM1={'Your Cart is empty'} nemptyM2={'Proceed to store and start shopping'} text={'Go to shop'}/>
    }</div>
     </div>
     </div>
)
}
export default Cart;