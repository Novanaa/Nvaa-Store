import React from "react";
import Navbar from "../pagesComponent/Navbar";
import PreviewStore from "../pagesComponent/PreviewStore";
import { useState, useEffect } from "react";

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
      <div>
        {allProducts.map((products) => (
          <div>
            <PreviewStore key={products.id} title={products.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
