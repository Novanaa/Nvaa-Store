import React from "react";
import Navbar from "../pagesComponent/Navbar";
import { useState, useEffect } from "react";
import PreviewStore from "../pagesComponent/PreviewStore";

function Store(props) {
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
