import React, { useState, useEffect } from "react";
import Navbar from "../pagesComponent/Navbar";
import StorePreview from "../pagesComponent/storePreview";

function Store() {
  const [products, setProducts] = useState([]);

  const allProductsEndpoint = import.meta.env.VITE_ALL_PRODUCTS_ENDPOINT;

  const allProductsData = async () => {
    const productsRespone = await fetch(allProductsEndpoint);
    const productsDatas = await productsRespone.json();
    setProducts(productsDatas);
    // console.log(products);
  };

  useEffect(() => {
    allProductsData();
  }, []);
  return (
    <>
      <Navbar />
      {products.map((datas) => (
        <StorePreview
          key={datas.id}
          title={datas.title}
          category={datas.category}
          price={datas.price}
          description={datas.description}
          image={datas.image}
        />
      ))}
    </>
  );
}

export default Store;
