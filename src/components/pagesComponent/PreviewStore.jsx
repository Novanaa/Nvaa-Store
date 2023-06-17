import React from "react";
import { useState, useEffect } from "react";
import "../styles/PreviewStore.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BtnStyle } from "../styles/GlobalStyled";
import { Link } from "react-router-dom";

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
    return (
      <>
        <div className="title">
          <div className="titleContainer">
            <div className="mainTitleWrapper">
              <p className="mainTitle">
                <span>Explore</span> Our <span>Products✨</span>
              </p>
            </div>
            <div className="titleDescriptionWrapper">
              <p className="titleDescription">Explore. Shop. Thrive.</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ResultDatas = () => {
    return limitProducts.slice(0, 9).map((result, index) => {
      return (
        <Link to={`/products/${result.id}`} key={index}>
          <div className="cardWrapper shadow-xl hover:shadow-2xl" key={index}>
            <div className="cardImagesWrapper">
              <LazyLoadImage
                src={result.image}
                effect="blur"
                className="cardImages"
              />
            </div>
            <div className="cardText">
              <p className="cardTitle">{result.title}</p>
              <p className="cardPrice">${result.price}</p>
              <p className="cardDescription">{result.description}</p>
              <div className="cardCategoryWrapper">
                <p className="cardCategory">{result.category}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  };

  const CardBtn = () => {
    return (
      <>
        <div className="homeStoreCardBtn">
          <BtnStyle className="cardBtn">
            <Link to="/store">More Products</Link>
          </BtnStyle>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cardComponent">
        <StoreTitle />
        <div className="cardContainer">
          <ResultDatas />
        </div>
        <CardBtn />
      </div>
    </>
  );
}

export default PreviewStore;
