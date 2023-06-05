import React from "react";
import "../styles/Credit.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  BtnStyle,
  SecondaryBtn,
  CubeStyle,
  BackgroundWrapper,
  Background,
} from "../styles/GlobalStyled";
import cubeImages from "../assests/feather/box.svg";

function Credit() {
  return (
    <>
      <div className="credit">
        <div className="creditContainer">
          <div className="creditWrapper">
            <div className="creditHeadlineWrapper">
              <p className="creditHeadline">What are you looking for?</p>
            </div>
            <div className="creditDescriptionWrapper">
              <p className="creditDescription">
                Are you wondering about <span>the ideal product</span> or&nbsp;
                <span>service to fulfill your needs?</span> Look no further!
                At&nbsp;
                <span>our e-commerce website</span>, we understand that finding
                the perfect item is a personal quest. That's why we're{" "}
                <span>dedicated</span> to <span>helping</span>
                &nbsp;you discover exactly what you're looking for.
              </p>
            </div>

            <div className="creditBtnWrapper">
              <BtnStyle type="sumbit" className="creditMainBtn">
                <Link to="/store">Find Your Styles</Link>
              </BtnStyle>
              <SecondaryBtn className="creditSecondaryBtn">
                <Link to="/store">Shop Now</Link>
              </SecondaryBtn>
            </div>
            <div className="creditCubeWrapper">
              <CubeStyle
                src={cubeImages}
                alt="cubeImages"
                className="creditCubeImagesOne"
              />
              <CubeStyle
                src={cubeImages}
                alt="cubeImages"
                className="creditCubeImagesTwo"
              />
              <CubeStyle
                src={cubeImages}
                alt="cubeImages"
                className="creditCubeImagesThree"
              />
            </div>
            <BackgroundWrapper className="creditBackgroundWrapper">
              <Background className="creditBackground"></Background>
            </BackgroundWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Credit;
