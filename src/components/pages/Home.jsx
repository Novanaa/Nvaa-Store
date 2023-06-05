import React from "react";
import Navbar from "../pagesComponent/Navbar";
import Hero from "../pagesComponent/Hero";
import Credit from "../pagesComponent/Credit";
import PreviewStore, { ViewDatas } from "../pagesComponent/PreviewStore";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Credit />
      <PreviewStore />
      <ViewDatas />
    </>
  );
}

export default Home;
