import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import Menu from "../assests/feather/menu.svg";
import cart from "../assests/feather/shopping-cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [values, setValues] = useState(false);
  const [open, setOpen] = useState(false);

  window.addEventListener("scroll", (scroll) => {
    setValues(false);
    setOpen(false);
  });

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
            <figure className="navimagesWrapper">
              <img src={cart} alt="cart" className="mobileNavCart" />
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
                <img
                  src={cart}
                  alt="cart"
                  className="navCart"
                  onClick={() => setOpen(!open)}
                />
                <input
                  type="search"
                  placeholder="Search products"
                  id="navInput"
                />
              </ul>
              <div className="navCartMenuWrapper">
                <div
                  className={`navCartIndicator ${
                    open ? `navCartActive` : `navCartInactive`
                  }`}
                ></div>
                <div
                  className={`navCartMenu shadow-2xl ${
                    open ? `navCartActive` : `navCartInactive`
                  }`}
                >
                  <div className="cartTitleWrapper">
                    <p className="cartTitle">My Carts</p>
                  </div>
                  <div className="navCartContentWrapper">
                    <p>No products yet.</p>
                  </div>
                  <div className="navCartLinkWrapper">
                    <Link to="/cart">
                      <p className="cartTitleLink">See all</p>
                    </Link>
                    <p className="cartTitleLink">Clear</p>
                  </div>
                </div>
              </div>
            </nav>
          </nav>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
