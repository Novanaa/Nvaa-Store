import React from "react";
import "../styles/Hero.css";
import cube from "../assests/feather/box.svg";

function Hero() {
  return (
    <>
      <section className="heroSection">
        <div className="heroContainer">
          <div className="heroWrapper">
            <div>ini hero</div>
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
