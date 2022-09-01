import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { getSelectedData, addToCart } from "../../redux/actions";
import ProductItem from "../ProductItem/ProductItem";
import './ProductDetails.css';


const ProductDetails = ({ selectedItem, getSelectedData, addToCart }) => {
  var [searchParams] = useSearchParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    getSelectedData(searchParams.get("id"));
  }, [getSelectedData, searchParams]);

  const getStatus=()=>{
    setTimeout(function () {
      document.getElementById("status").innerHTML = '';
  }, 1000);
  
  // Now remove alarmmsg's content.
  document.getElementById("status").innerHTML = "Added to Cart"; 
  }

  return (
    <>
      <ProductItem
        nav={false}
        id={selectedItem.id}
        title={selectedItem.title}
        price={selectedItem.price}
        desc={selectedItem.description}
        imgUrl={selectedItem.image}
        childrenComps={
          <><button
          type="submit"
          id="addToCartBtn"
          className="btn"
          onClick={() => {
            console.log(selectedItem);
            addToCart(selectedItem);
            getStatus();
          }}
        >
          Add to cart
        </button>
        <b id="status"></b>
        </>
        }
        />
        
    </>
  );
};
const mapStatesToProps = (state) => {
  return { selectedItem: state.selectedItem };
};
export default connect(mapStatesToProps, { getSelectedData, addToCart })(
  ProductDetails
);
