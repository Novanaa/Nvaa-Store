import React from "react";
import Navbar from "../pagesComponent/Navbar";
import Hero from "../pagesComponent/Hero";
import Credit from "../pagesComponent/Credit";
import PreviewStore from "../pagesComponent/PreviewStore";
import Footer from "../pagesComponent/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Credit />
      <PreviewStore />
      <Footer />
    </>
  );
}

export default Home;
