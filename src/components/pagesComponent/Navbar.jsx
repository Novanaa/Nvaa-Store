import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import Menu from "../assests/feather/menu.svg";
import Hero from "./Hero";

function Navbar() {
  const navigate = useNavigate();
  const [values, setValues] = useState(false);

  // let navList = document.getElementById("navList");
  // let menu = document.getElementById("menu");
  // const mainBtn = () => {
  //   navList.classList.toggle("active");
  //   menu.classList.toggle("activeMenu");
  //   console.log("test");
  //   setValues(true);
  // };

  // useEffect(() => {
  //   mainBtn();
  // });

  // const mainBtn = () => {
  //   setValues(!values);
  // };

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
                <input
                  type="search"
                  placeholder="Search products"
                  id="navInput"
                />
              </ul>
            </nav>
          </nav>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
