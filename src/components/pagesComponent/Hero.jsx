import React from "react";
import "../styles/Hero.css";
import cube from "../assests/feather/box.svg";
import mainImages from "../assests/Images/doument.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="heroSection">
        <div className="heroContainer">
          <div className="heroWrapper">
            {/* heroHeader */}
            <div className="heroSectionContainer">
              <div className="heroHeaderWrapper">
                <div className="heroHeadline">
                  <p className="heroHeadParagraph">
                    <span className="heroSpan">Discover</span> the Ultimate{" "}
                    <span className="heroSpan">Shopping Experience</span> <br />
                    Where You Find the Endless Deals
                  </p>
                </div>
                <div className="heroTaglineWrapper">
                  <p className="heroTagline">
                    E-commerce revolutionizes shopping and business by
                    eliminating physical stores, offering convenience,
                    accessibility, and a seamless shopping experience for
                    consumers and businesses, transforming transactions in the
                    digital age.
                  </p>
                </div>
                <div className="heroBtnWrapper">
                  <button className="heroBtn" type="sumbit">
                    <Link to="/store">Let's Started</Link>
                  </button>
                  <button className="secHeroCta">Community</button>
                </div>
              </div>
              <div className="heroImagesWrapper">
                <img
                  src={mainImages}
                  alt="HeroImages"
                  className="mainHeroImages"
                />
              </div>
            </div>

            {/* heroCube */}
            <div className="heroCubeWrapper">
              <img src={cube} alt="cubeOne" className="heroCubeOne" />
              <img src={cube} alt="cubeOne" className="heroCubeTwo" />
              <img src={cube} alt="cubeOne" className="heroCubeThree" />
            </div>
            {/* heroBlurBackground */}
            <div className="heroBackgroundWrapper">
              <div className="heroBackground"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
