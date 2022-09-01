import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import "./NavBar.css";
import "font-awesome/css/font-awesome.min.css";

const NavBar = ({ setSearchTerm,cartItems }) => {
  const navigate = useNavigate();
  const getAuthBtn = () => {
    return "Login";
    //check auth status and return the appropriate button
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/search`);
  };

  
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/" className="nav-element">
              Arch
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/products" className="nav-element">
              Trending
            </NavLink>
          </li> */}
          <li>
            <form onSubmit={(e) => {
              onSearchSubmit(e);
            }}>
              <input
              className="search-bar"
                type="text"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </form>
          </li>
          <li>
            <NavLink to="/products" className="nav-element">
              <button type="submit" disabled>{getAuthBtn()}</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-element">
                <svg
                  // onClick={()=>{navigate('/cart');}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  className="bi bi-cart-fill cart-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              <span className="cart-badge">{cartItems}</span>
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};
const mapStatesToProps = (state) => {
  return {cartItems: state.cart.length};
};
export default connect(mapStatesToProps, { setSearchTerm })(NavBar);
