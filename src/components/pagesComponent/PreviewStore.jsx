import React from "react";
import { useState, useEffect } from "react";
import { BtnStyle } from "../styles/GlobalStyled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PreviewStore() {
  const endpoint = import.meta.env.VITE_ENDPOINT;

  const [limitProducts, setLimitProducts] = useState([]);
  const previewProducts = async () => {
    const productsLimitRespone = await fetch(`${endpoint}?limit=5`);
    const productsDatas = await productsLimitRespone.json();
    setLimitProducts(productsDatas);
    // console.log(limitProducts);
  };

  useEffect(() => {
    previewProducts();
  });

  return (
    <>
      {limitProducts.map((productsDatas) => (
        <div className="flex justify-center items-center m-4">
          <ViewDatas
            key={productsDatas.id}
            title={productsDatas.title}
            description={productsDatas.description}
            price={productsDatas.price}
            category={productsDatas.category}
            image={productsDatas.image}
          />
        </div>
      ))}
    </>
  );
}

export const ViewDatas = (props) => {
  return (
    <>
      <div
        className="card card-compact w-96 shadow-2xl bg-white rounded-lg cursor-pointer "
        style={{ padding: "2rem" }}
      >
        <figure
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "2.5rem",
          }}
        >
          <LazyLoadImage
            src={props.image}
            effect="blur"
            style={{
              width: "10rem",
            }}
          />
        </figure>
        <div className="card-body bg-base-100 flex flex-col gap-1">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.category}</p>
          <p>${props.price}</p>
          <div className="card-actions justify-end">
            <BtnStyle>Buy Now</BtnStyle>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewStore;
