import React, { useState, useRef } from "react";
import SignIn from "../../pages/registration/signIn/index";
import SignUp from "../../pages/registration/signUp/index";
import Popup from "../common/Popup-1/Popup";
import Popup2 from '../common/Popup-2/Popup'
import { NavLink } from 'react-router-dom';

import "./styles.scss";

const Header = () => {
  const [activePopup, setActivePopup] = useState(false);
  const [activePopup2, setActivePopup2] = useState(false);
  const popupRef = useRef();
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {activePopup && (
              <SignIn
                setActivePopup={setActivePopup}
                popupRef={popupRef}
                activePopup={activePopup}
              />
          )}
          {activePopup2 && (
                  <SignUp
                  setActivePopup={setActivePopup2}
                  popupRef={popupRef}
                  activePopup={activePopup2}
                />
          )}
          <Popup active={activePopup} setActive={setActivePopup} />
          <Popup2 active2={activePopup2} setActive2={setActivePopup2} />
          <div className="header__logo">
            <button
              className="header__btn"
              onClick={() => setActivePopup(true)}
            >
              Sign In
            </button>
            <button
              className="header__btn"
              onClick={() => setActivePopup2(true)}
            >
              Sign Up
            </button>
          </div>
          <div className="header__search">
            <a href="#" className="header__search-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"><path d="M15.0258 13.8475L18.595 17.4159L17.4158 18.595L13.8475 15.0259C12.5198 16.0902 10.8683 16.6691 9.16666 16.6667C5.02666 16.6667 1.66666 13.3067 1.66666 9.16669C1.66666 5.02669 5.02666 1.66669 9.16666 1.66669C13.3067 1.66669 16.6667 5.02669 16.6667 9.16669C16.6691 10.8684 16.0902 12.5198 15.0258 13.8475ZM13.3542 13.2292C14.4118 12.1416 15.0024 10.6837 15 9.16669C15 5.94335 12.3892 3.33335 9.16666 3.33335C5.94333 3.33335 3.33333 5.94335 3.33333 9.16669C3.33333 12.3892 5.94333 15 9.16666 15C10.6837 15.0024 12.1416 14.4118 13.2292 13.3542L13.3542 13.2292Z" fill="black"/></svg> </a>
            <input type="text" placeholder="Search..." />
          </div>
          <nav>
            <ul className="header__link">
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to="/article">Articles</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
