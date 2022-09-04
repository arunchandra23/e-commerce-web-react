import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./NavBar.css";

const NavBar = ({ searchTerm, setSearchTerm, cartItems }) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const getAuthBtn = () => {
    return "Login";
    //check auth status and return the appropriate button
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/search`);
  };

  //SpeechRecognition

  const commands = [
    {
      command: "*",
      callback: () => {
        setSearchTerm(transcript);
        navigate(`/products/search`);
      },
    },
  ];

  const {
    transcript,
    listening,
    // resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  //Ends SpeechRecognition

  const handleMic = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      // SpeechRecognition.abortListening()
      setSearchTerm(transcript);
    } else {
      SpeechRecognition.startListening();
    }
  };
  return (
    <>
      <header>
        <div className="nav-hidden">
          <ul>
            <li>
              <NavLink to="/" className="nav-element" id="logo">
                The Arch Studio
              </NavLink>
            </li>

            <li>
              <form
                onSubmit={(e) => {
                  onSearchSubmit(e);
                }}
              >
                <input
                  className="search-bar"
                  id="search-bar"
                  ref={searchRef}
                  value={searchTerm}
                  type="text"
                  // value={transcript}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value !== "") {
                      navigate(`/products/search`);
                    }
                  }}
                />
              </form>
            </li>

            <li>
              <NavLink to="/products" className="nav-element">
                {getAuthBtn()}
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-element"></NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <NavLink to="/" className="nav-element" id="logo">
              The Arch Studio
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/products" className="nav-element">
              Trending
            </NavLink>
          </li> */}
          <li>
            <form
              onSubmit={(e) => {
                onSearchSubmit(e);
              }}
            >
              <input
                className="search-bar"
                id="search-bar"
                ref={searchRef}
                value={searchTerm}
                type="text"
                // value={transcript}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (e.target.value !== "") {
                    navigate(`/products/search`);
                  }
                }}
              />
            </form>
          </li>
          <li>
            {!browserSupportsSpeechRecognition ? (
              ''
            ) : (
              <svg
                onClick={() => {
                  handleMic();
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{
                  cursor: "pointer",
                  animation: listening ? "pulsate infinite 1.5s" : "",
                }}
                // fill='currentColor'
                className="bi bi-mic-fill nav-element mic"
                viewBox="0 0 16 16"
              >
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
              </svg>
            )}
          </li>
          <li>
            <NavLink to="/products" className="nav-element">
              <button type="submit" style={{ display: "none" }} disabled>
                {getAuthBtn()}
              </button>
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
          <li>
            <div
              className="burger"
              onClick={() => {
                document.querySelector("burger").classList.toggle("show-nav");
              }}
            >
              <div className="l1"> </div>
              <div className="l2"> </div>
              <div className="l3"> </div>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};
const mapStatesToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    cartItems: state.cart.length,
    speechText: state.speechText,
  };
};
export default connect(mapStatesToProps, { setSearchTerm })(NavBar);
