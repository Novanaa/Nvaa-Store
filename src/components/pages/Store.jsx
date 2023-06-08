import React from "react";
import Navbar from "../pagesComponent/Navbar";
import { useState, useEffect } from "react";
import Footer from "../pagesComponent/Footer";

function Store() {
  const [allProducts, setAllProducts] = useState([]);
  const endpoint = import.meta.env.VITE_ENDPOINT;

  const data = async () => {
    const respone = await fetch(endpoint);
    const allData = await respone.json();
    setAllProducts(allData);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <Navbar />
      {allProducts.map((products) => (
        <ProdutcsPreview key={products.id} title={products.title} />
      ))}
      <Footer />
    </>
  );
}

export const ProdutcsPreview = (props) => {
  return (
    <>
      <div className="mt-20">
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default Store;
