import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import Menu from "../assests/feather/menu.svg";
import cart from "../assests/feather/shopping-cart.svg";

function Navbar() {
  const navigate = useNavigate();
  const [values, setValues] = useState(false);

  return (
    <>
      <nav className="navbar">
        <nav className="navbarContainer">
          <nav className="navbarWrapper">
            <div className="navbarBrandWrapper">
              <p
                className="navbarBrand text-slate-800"
                onClick={() => navigate("/")}
              >
                Nvaa
              </p>
            </div>
            <figure className="imagesWrapper">
              <img
                src={Menu}
                alt="menu"
                className={`menuImages ${
                  values ? `opacityActive` : `opacityInactive`
                }`}
                onClick={() => {
                  setValues(!values);
                }}
                id="menu"
              />
            </figure>
            <nav
              className={`navbarListWrapper ${values ? `active` : `inactive`}`}
              id="navList"
            >
              <ul className="ul-nav">
                <li className="li-nav" onClick={() => navigate("/")}>
                  Home
                </li>
                <li className="li-nav" onClick={() => navigate("/about")}>
                  About
                </li>
                <li className="li-nav" onClick={() => navigate("/store")}>
                  Store
                </li>
                <img src={cart} alt="cart" className="navCart" />
                <input
                  type="search"
                  placeholder="Search products"
                  id="navInput"
                />
              </ul>
              <div className="navCartMenuWrapper">
                <div className="navCartMenu"></div>
              </div>
            </nav>
          </nav>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
