import React from "react";
import "../styles/Hero.css";
import cube from "../assests/feather/box.svg";
import mainImages from "../assests/Images/doument.png";
import { Link } from "react-router-dom";
import {
  BtnStyle,
  BackgroundWrapper,
  Background,
  CubeStyle,
  SecondaryBtn,
  ins,
  fb,
} from "../styles/GlobalStyled";

function Hero() {
  const cubeOneLink = () => {
    window.open(ins, "_blank");
  };

  const cubeTwoLink = () => {
    window.open(fb, "_blank");
  };
  const cubeThreeLink = () => {
    window.open("", "_blank");
  };

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
                    <span className="heroSpan">Discover</span> Your{" "}
                    <span className="heroSpan">Path</span> to{" "}
                    <span className="heroSpan">Success.</span>
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
                  <BtnStyle className="heroBtn" type="sumbit">
                    <Link to="/store">Let's Started</Link>
                  </BtnStyle>
                  <SecondaryBtn className="secHeroCta">Community</SecondaryBtn>
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
              <CubeStyle
                src={cube}
                alt="cubeOne"
                className="heroCubeOne"
                onClick={() => cubeOneLink()}
              />
              <CubeStyle
                src={cube}
                alt="cubeOne"
                className="heroCubeTwo"
                onClick={() => cubeTwoLink()}
              />
              <CubeStyle
                src={cube}
                alt="cubeOne"
                className="heroCubeThree"
                onClick={() => cubeThreeLink()}
              />
            </div>
            {/* heroBlurBackground */}
            <BackgroundWrapper className="heroBackgroundWrapper">
              <Background className="heroBackground"></Background>
            </BackgroundWrapper>
            <BackgroundWrapper className="mobileHeroBackgroundWrapper">
              <Background className="mobileHeroBackground"></Background>
            </BackgroundWrapper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
