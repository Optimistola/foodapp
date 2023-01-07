import React from 'react';
import cart from "../Component/images/cart.jpg";
import Empty from "../Component/empty";
import Pages from './pages';
function Cart(){
return(
  <div>
   <Pages pageName={'Cart'}/>
   <Empty emptyImage={cart} emptyM1={'Your cart is empt'} emptyM2={'Proceed to store and start shopping'} text={'Go to shop'}/>

  </div>
)
}
export default Cart;