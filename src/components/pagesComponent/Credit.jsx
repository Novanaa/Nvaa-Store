import React from "react";
import "../styles/Credit.css";
import { BtnStyle, SecondaryBtn } from "../styles/GlobalStyled";

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
                Are you wondering about the ideal product or service to fulfill
                your needs? Look no further! At our e-commerce website, we
                understand that finding the perfect item is a personal quest.
                That's why we're dedicated to helping you discover exactly what
                you're looking for.
              </p>
            </div>
          </div>
          <div className="creditBtnWrapper">
            <BtnStyle>Find Your Styles</BtnStyle>
            <SecondaryBtn>Shop Now</SecondaryBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default Credit;
