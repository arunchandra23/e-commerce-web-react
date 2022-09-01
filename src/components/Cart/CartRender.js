import React from 'react'
import { addToCart, reduceQuantity } from "../../redux/actions";
import { connect } from "react-redux";
import ProductItem from '../ProductItem/ProductItem';
import '../utils.css'

const CartRender=({ addToCart, reduceQuantity, cartItem })=> {
    return (
        <>
          <ProductItem
        nav={false}
        id={cartItem.itemId.id}
        title={cartItem.itemId.title}
        price={cartItem.itemId.price}
        desc={cartItem.itemId.description}
        imgUrl={cartItem.itemId.image}
        childrenComps={
          <>
          <h2>Quantity: {cartItem.quantity}</h2>
          <h2>Price: {cartItem.itemId.price * 50}X{cartItem.quantity} = ₹<span id='price'>{cartItem.itemId.price * 50 *cartItem.quantity}</span></h2>
        <div className='align-side-by-side'>
        <button
        className="btn m-10"
          type="submit"
          onClick={() => {
            reduceQuantity(cartItem.itemId);}}><b><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
          </svg></b>
        </button>
        <button
        className="btn m-10"
          type="submit"
          onClick={() => {
            addToCart(cartItem.itemId);
          }}
        ><b><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
      </svg></b>
        </button>
        
        </div>
        </>}
      />
        </>
      );
}
const mapStatesToProps = (state) => {
    return { };
  };
export default connect(mapStatesToProps,{ addToCart, reduceQuantity })(CartRender);
