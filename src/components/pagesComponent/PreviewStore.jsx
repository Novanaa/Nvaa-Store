import React from "react";
import { useState, useEffect } from "react";
import "../styles/PreviewStore.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PreviewStore() {
  const endpoint = import.meta.env.VITE_ENDPOINT;

  const [limitProducts, setLimitProducts] = useState([]);
  const previewProducts = async () => {
    const productsLimitRespone = await fetch(`${endpoint}?limit=10`);
    const productsDatas = await productsLimitRespone.json();
    setLimitProducts(productsDatas);
  };

  useEffect(() => {
    previewProducts();
  }, []);

  const StoreTitle = () => {
    return <></>;
  };

  const ResultDatas = () => {
    return limitProducts.slice(0, 9).map((result, index) => {
      return (
        <>
          <div className="cardWrapper">
            <div className="cardImagesWrapper">
              <LazyLoadImage
                src={result.image}
                effect="blur"
                className="cardImages"
              />
            </div>
            {/* <div className="cardText">
              <p className="cardTitle">{result.title}</p>
              <p className="cardPrice">${result.price}</p>
              <p className="cardDescription">{result.description}</p>
              <p className="cardCategory">{result.category}</p>
            </div> */}
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="cardComponent">
        <div className="cardContainer">
          <StoreTitle />
          <ResultDatas />
        </div>
      </div>
    </>
  );
}

export default PreviewStore;
