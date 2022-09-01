import React from "react";
import "./HomeItem.css";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ itemObj }) => {
  const navigate = useNavigate();
  return (
    <div data-aos="zoom-in" data-aos-offset="10" data-aos-delay="10" className="home-item">
      <img src={itemObj.image} alt="" />
      <div className="home-item-details">
        <div className="home-item-title">{itemObj.title}</div>
        <div className="home-item-price">₹{itemObj.price * 50}</div>
          <button type="submit" onClick={()=>{navigate(`/products/details?id=${itemObj.id}`)}}>View details</button>
      </div>
    </div>
  );
};
export default HomeItem;
