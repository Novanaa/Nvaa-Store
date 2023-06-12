import React from "react";
import Navbar from "../pagesComponent/Navbar";
import "../styles/About.css";
import Footer from "../pagesComponent/Footer";
import ProfilePicture from "../assests/Images/profile.png";
import { BackgroundWrapper, Background } from "../styles/GlobalStyled";
import { ins, fb, git } from "../styles/GlobalStyled";
import { Link } from "react-router-dom";
import instagram from "../assests/feather/instagram.svg";
import github from "../assests/feather/github.svg";
import facebook from "../assests/feather/facebook.svg";

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
            <p className="aboutHeader">
              <span className="aboutSpan">About</span> Me
            </p>
            <img
              src={ProfilePicture}
              alt="Nvaa"
              className="aboutProfileImages"
            />
            <p className="aboutName">
              Kadek <span>Nova</span>
            </p>
            <p className="aboutTitle">Front End Developer</p>
            <div className="aboutLinkWrapper">
              <Link to={ins}>
                <img src={instagram} alt="ins" className="aboutLink" />
              </Link>
              <Link to={git}>
                <img src={github} alt="git" className="aboutLink" />
              </Link>
              <Link to={fb}>
                <img src={facebook} alt="fb" className="aboutLink" />
              </Link>
            </div>
            <BackgroundWrapper className="aboutBackgroundWrapper">
              <Background className="aboutBackground"></Background>
            </BackgroundWrapper>
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
