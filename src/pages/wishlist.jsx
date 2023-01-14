import {React, useContext, useState} from 'react';
import wishlist from "../Component/images/wishlist.jpg";
import Empty from "../Component/empty";
import Pages from './pages';
function Wishlist(){
 const [selected]=useState(JSON.parse(localStorage.getItem('selected')));
return(
  <div>    
     <Pages pageName={'Whislist'}/>
     <Empty emptyImage={wishlist} emptyM1={'Your wishlist is empty'} nemptyM2={'Proceed to store and start shopping'} text={'Go to shop'}/>
     <div>  
     <h2>{ selected ? selected: 'no wish'}</h2>
     </div>
  </div>
    
)
}

export default Wishlist;