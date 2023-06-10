import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <footer className="footerContainer">
          <footer className="footerWrapper">
            <div className="mainFooterSectionWrapper">
              <p className="footerMainTitle">Nvaa - Store</p>
              <p className="footerMainCopyright">
                © 2023 Nvaa Store, Inc. All rights reserved.
              </p>
            </div>
            <div className="secondaryFooterSectionWrapper">
              <p className="secondaryFooterTitle">Store Page</p>
              <p className="secondaryFooterPage">
                <Link to="/about">About</Link>
              </p>
              <p className="secondaryFooterPage">
                <Link to="/">Community</Link>
              </p>
              <p className="secondaryFooterPage">
                <Link to="/store">Store</Link>
              </p>
            </div>
            <div className="thirdFooterSectionWrapper">
              <p className="thirdFooterTitle">Contact</p>
              <p className="thirdFooterLink">Instagram</p>
              <p className="thirdFooterLink">Github</p>
              <p className="thirdFooterLink">Facebook</p>
            </div>
          </footer>
        </footer>
      </footer>
    </>
  );
}

export default Footer;
