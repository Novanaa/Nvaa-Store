import React from "react";
import Navbar from "../pagesComponent/Navbar";
import "../styles/About.css";
import Footer from "../pagesComponent/Footer";

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
          <div className="aboutWrapper"></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
