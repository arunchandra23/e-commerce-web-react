import React from "react";
import { connect } from "react-redux";
import CartRender from "./CartRender";
import './Cart.css';
import '../utils.css';

const Cart = ({ cartData }) => {
 
  var total=0
  
  const renderedList = cartData.map((cartItem) => {
    total=total+(cartItem.itemId.price*50*cartItem.quantity);
    return < CartRender key={cartItem.itemId.id} cartItem={cartItem}/>
  });
  if(cartData.length===0){
    return <div className="category-btns  home-item .m-auto-w-80vw">
      Cart empty
    </div>;
  }
  return (<div className="cart-container">

    {renderedList}
    <hr/>
    <span id="totalPrice">Cart Total:₹ {total}</span>
  </div>);
};

const mapStatesToProps = (state) => {
  return { cartData: state.cart };
};
export default connect(mapStatesToProps)(Cart);
