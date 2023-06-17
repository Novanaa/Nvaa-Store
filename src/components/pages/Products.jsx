import React, { useState, useEffect } from "react";
import "../styles/Products.css";
import Navbar from "../pagesComponent/Navbar";
import { Link, useParams } from "react-router-dom";
import Footer from "../pagesComponent/Footer";
import {
  BackgroundWrapper,
  Background,
  BtnStyle,
  SecondaryBtn,
} from "../styles/GlobalStyled";

function Products() {
  const { id } = useParams();
  const endpoint = import.meta.env.VITE_ENDPOINT;
  const [allProductsDetails, setAllProductsDetails] = useState([]);
  const productsDetails = async () => {
    const res = await fetch(`${endpoint}/${id}`);
    const result = await res.json();
    setAllProductsDetails(result);
  };

  const ProductsTitle = () => {
    return (
      <>
        <div className="productsBrandContainer">
          <div className="productsBrandWrapper">
            <Link to="/">
              <p className="productsBrand">Nvaa - Store</p>
            </Link>
          </div>
        </div>
      </>
    );
  };

  const [count, setCount] = useState(1);
  if (count < 0) {
    setCount(0);
  }
  const AllProdcuts = () => {
    return [allProductsDetails].map((products, index) => {
      return (
        <div className="productsWrapper" key={index}>
          <div className="productsContentWrapper">
            <div className="productsImagesContainer shadow-xl">
              <div className="productsImagesWrapper">
                <img src={products.image} className="productsImages" />
              </div>
            </div>
            <div className="productsDataWrapper">
              <div className="backBtnWrapper">
                <Link to="/">
                  <p className="backBtn">
                    <span className="backSpan">&lt;</span>=
                  </p>
                </Link>
              </div>
              <p className="productsTitle">{products.title}</p>
              <p className="productsPrice">${products.price}</p>
              {[products.rating].map((items, i) => {
                return items?.rate && items?.count ? (
                  <div key={i}>
                    <p className="productsRate">⭐{items.rate}</p>
                    <p className="productsCount">{items.count}pcs sold</p>
                  </div>
                ) : null;
              })}
              <div className="productsDescriptionWrapper">
                <p className="productsDescription">{products.description}</p>
              </div>
              <div className="productsCategoryWrapper">
                <p className="productsCategory">{products.category}</p>
              </div>
              <div className="productsCartFeatureWrapper">
                <div className="productsCounterWrapper shadow-lg">
                  <button
                    onClick={() => setCount((prev) => prev - 1)}
                    className="productsCounterBtnOne"
                  >
                    -
                  </button>
                  <p className="productsCounter">{count}</p>
                  <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="productsCounterBtn"
                  >
                    +
                  </button>
                </div>
                <div className="productsBtnWrapper">
                  <BtnStyle className="productsPrimaryBtn" type="sumbit">
                    Add to cart
                  </BtnStyle>
                  <SecondaryBtn className="productsSecondaryBtn" type="sumbit">
                    Buy Now
                  </SecondaryBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    productsDetails();
  }, []);
  return (
    <>
      <Navbar />
      <div className="productsDetail">
        <div className="productsContainer">
          <ProductsTitle />
          <AllProdcuts />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
