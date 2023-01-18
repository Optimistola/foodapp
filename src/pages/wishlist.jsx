import {React, useEffect, useState} from 'react';
import wishlist from "../Component/images/wishlist.jpg";
import Empty from "../Component/empty";
import Pages from './pages';
import storeWish from '../Component/storewish';
import storeCart from '../Component/storeCart';
import {BiTrash, BiCart} from 'react-icons/bi';
function Wishlist(){
  const [selected, setSelected ]=useState([]);
  const [cartselected, setcartSelected ]=useState([]);
  const [item, setItem]=useState([]);
  useEffect(()=>{
   const storedItem=(JSON.parse(localStorage.getItem('items')));
  setItem(storedItem);
  }, []);
 let handleRemove=(id)=>{
 let removed= storeWish.findIndex(item=>item.id==id)
  setSelected(storeWish.splice(removed, 1));
localStorage.setItem('items', JSON.stringify(storeWish));
};
let handleMove=(id)=>{
  let Moved= storeWish.findIndex(item=>item.id==id);
  setcartSelected(storeCart.push(id));
  setSelected(storeWish.splice(Moved, 1));
  localStorage.setItem('items', JSON.stringify(storeWish));
  localStorage.setItem('cartitems', JSON.stringify(storeCart));
}
return(
  <div>    
     <Pages pageName={'Whislist'}/>
     <div className='' >  
     <div className='flex flex-wrap'>{ item.length > 0 ? 
     item.map( myItem=>(
      <div className=' mb-5 mt-10 lg:ml-10 ml-10 flex gap-6' key={myItem.id}>
        <div>
       <img src={myItem.img} className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[150px] lg:h-[150px] xl:w-[250px] xl:h-[250px] flex-1'/>
       </div>
       <div className='mt-10'>
       <p className='font-bold text-xl'>{myItem.key}</p>
       <p>${myItem.price}.00</p>
       <div className=''>
       <button onClick={()=>handleRemove(myItem.id)} className=' py-2 px-2  rounded text-sm flex  items-center shadow text-red' ><BiTrash className=''/><p className='text-sm text-red-600'>remove</p></button>
       <button onClick={()=>handleMove(myItem.id)} className=' py-2 px-2 text- rounded  text-sm shadow flex items-center'  ><BiCart/><p className='text-red-600'>Move to cart</p></button>
</div>
</div>
      </div>
     )): 
     <Empty emptyImage={wishlist} emptyM1={'Your wishlist is empty'} nemptyM2={'Proceed to store and start shopping'} text={'Go to shop'}/>
    }</div>
     </div>
  </div>
    
)
}

export default Wishlist;