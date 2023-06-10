import React from "react";
import Navbar from "../pagesComponent/Navbar";
import "../styles/About.css";
import Footer from "../pagesComponent/Footer";
import ProfilePicture from "../assests/Images/profile.jpg";
import { BackgroundWrapper, Background } from "../styles/GlobalStyled";

function About() {
  return (
    <>
      <Navbar />
      <AboutPage />
    </>
  );
}

export const AboutPage = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="aboutContainer">
          <div className="aboutWrapper">
            <p className="aboutTitle">
              Hey, Welcome to my website. its me Nova!
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
