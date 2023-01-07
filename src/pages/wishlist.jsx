import React from 'react';
import wishlist from "../Component/images/wishlist.jpg";
import Empty from "../Component/empty";
import Pages from './pages';
function Wishlist(){
return(
  <div>
     <Pages pageName={'Whislist'}/>
     <Empty emptyImage={wishlist} emptyM1={'Your wishlist is empty'} emptyM2={'Proceed to store and start shopping'} text={'Go to shop'}/>

  </div>
    
)
}
export default Wishlist;