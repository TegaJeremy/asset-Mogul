import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./Header.css";
import "./HeaderMedia.css";
import naxtrologo from "../../assets/asset_mogul_logo.png";
import TickerTapeComponent from "../../tradingViewWidget/TickerTapeComponent";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    setMenu(false);
    navigate("/");
  };
  const goAbout = () => {
    setMenu(false);
    navigate("/about");
  };
  const goTerms = () => {
    setMenu(false);
    navigate("/terms");
  };
  const goLogin = () => {
    setMenu(false);
    navigate("/login");
  };
  const goContact = () => {
    setMenu(false);
    navigate("/contact");
  };
  const goMarket = () => {
    setMenu(false);
    navigate("/market");
  };
  const goRegister = () => {
    setMenu(false);
    navigate("/register");
  };

  return (
    <>
      <div className="home-widget-homeMenu-holder">
        <div className="home-header-container">
          <div className="home-header-wrapper">
            <div className="home-header-wrapper-logo">
              <img src={naxtrologo} alt="company logo" />
            </div>
            {/*  */}
            <div className="home-header-wrappper-menu">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "menuactive" : "menunotactive"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "menuactive" : "menunotactive"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms"
                    className={({ isActive }) =>
                      isActive ? "menuactive" : "menunotactive"
                    }
                  >
                    Terms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "menuactive" : "menunotactive"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/market"
                    className={({ isActive }) =>
                      isActive ? "menuactive" : "menunotactive"
                    }
                  >
                    Market news
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "menuactive" : "menunotactive"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
            <span className="home-header-create-acct-span">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "menuactive" : "menunotactive"
                }
              >
                Create Account
              </NavLink>
            </span>
          </div>
          <div className="home-header-wrapper-media">
            <div className="header-mobile-logo-container">
              <img src={naxtrologo} alt="logo" />
            </div>
            <div className="header-burger-menu-container">
              {menu ? (
                <div className="burger_menu">
                  <IoMdClose
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => {
                      setMenu(false);
                    }}
                  />
                </div>
              ) : (
                <div className="burger_menu">
                  <RxHamburgerMenu
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => {
                      setMenu(true);
                    }}
                  />
                </div>
              )}
            </div>
            {menu ? (
              <div className="header-mobile-menu">
                <ul>
                  <li onClick={goHome}>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "mobilemenuactive" : "mobilemenunotactive"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li onClick={goAbout}>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "mobilemenuactive" : "mobilemenunotactive"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li onClick={goTerms}>
                    <NavLink
                      to="/terms"
                      className={({ isActive }) =>
                        isActive ? "mobilemenuactive" : "mobilemenunotactive"
                      }
                    >
                      Terms
                    </NavLink>
                  </li>
                  <li onClick={goContact}>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "mobilemenuactive" : "mobilemenunotactive"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li onClick={goMarket}>
                    <NavLink
                      to="/market"
                      className={({ isActive }) =>
                        isActive ? "mobilemenuactive" : "mobilemenunotactive"
                      }
                    >
                      Market News
                    </NavLink>
                  </li>
                  <li onClick={goLogin}>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "mobilemenuactive" : "mobilemenunotactive"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li onClick={goRegister}>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive ? "mobilemenuactive" : "mobilemenunotactive"
                      }
                    >
                      Create Account
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
